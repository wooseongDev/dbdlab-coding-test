import { ChartBox } from '@components/chart-box'
import { Select } from '@components/select'
import { css } from '@emotion/react'
import type { Covid19GenAgeCaseItem } from '@tools/api/requests/get-covid19-gen-age-case-inf'
import { ChartData, ChartOptions } from 'chart.js'
import dayjs from 'dayjs'
import { groupBy, sortBy, uniqBy } from 'lodash'
import React, { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { useSelect } from '../../hooks/use-select'

type CovidGenderDailyChartProps = {
  className?: string

  data: Covid19GenAgeCaseItem[]
}

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}

export const CovidGenderDailyChart: React.FC<CovidGenderDailyChartProps> = (props) => {
  const { className, data } = props

  const dates = useMemo(() => {
    const sorted = sortBy(data, (item) => item.stateDt)
    return uniqBy(sorted, (item) => item.stateDt).map((item) => item.stateDt)
  }, [data])

  const [selectedDate, onChange] = useSelect(dates[0])

  const chartData = useMemo((): ChartData<'doughnut', string[], string> => {
    const grouped = groupBy(data, (item) => item.stateDt)

    const man = grouped[selectedDate].find((item) => item.gubun === '남성')?.confCase || '0'
    const woman = grouped[selectedDate].find((item) => item.gubun === '여성')?.confCase || '0'

    return {
      labels: ['남', '여'],
      datasets: [
        {
          data: [man, woman],
          backgroundColor: ['#629ACD', '#E79997'],
          hoverBackgroundColor: ['#629ACD', '#E79997'],
        },
      ],
    }
  }, [data, selectedDate])

  return (
    <ChartBox className={className} title="일자별 성별 확진자 수" size="medium">
      <div css={chartWrapStyle}>
        <Select
          options={dates.map((date) => ({
            value: date,
            label: dayjs(date).format('MM/DD'),
          }))}
          selected={selectedDate}
          onChange={onChange}
        />

        <Doughnut css={chartStyle} data={chartData} options={options} />
      </div>
    </ChartBox>
  )
}

const chartWrapStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`

const chartStyle = css`
  max-height: 275px;
  // * canvas inline style 적용 방지
  width: 100% !important;
  height: 100% !important;
`
