import { ChartBox } from '@components/chart-box'
import { css } from '@emotion/react'
import type { Covid19GenAgeCaseItem } from '@tools/api/requests/get-covid19-gen-age-case-inf'
import { ChartData, ChartOptions } from 'chart.js'
import dayjs from 'dayjs'
import { groupBy, uniq } from 'lodash'
import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

type CovidAgeDailyChartProps = {
  className?: string

  data: Covid19GenAgeCaseItem[]
}

const options: ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
  scales: {
    x: { stacked: true },
    y: { stacked: true },
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}

export const CovidAgeDailyChart: React.FC<CovidAgeDailyChartProps> = (props) => {
  const { className, data } = props

  const chartData = useMemo((): ChartData<'bar', string[], string> => {
    const grouped = groupBy(data, (item) => item.gubun)
    const labels = uniq(data.map((item) => dayjs(item.stateDt).format('MM/DD')))

    return {
      labels,
      datasets: [
        {
          label: '0-9',
          data: grouped['0-9'].map((item) => item.confCase),
          backgroundColor: 'rgba(98, 154, 205, 0.5)',
          hoverBackgroundColor: 'rgba(98, 154, 205, 1)',
        },
        {
          label: '10-19',
          data: grouped['10-19'].map((item) => item.confCase),
          backgroundColor: 'rgba(146, 135, 216, 0.5)',
          hoverBackgroundColor: 'rgba(146, 135, 216, 1)',
        },
        {
          label: '20-29',
          data: grouped['20-29'].map((item) => item.confCase),
          backgroundColor: 'rgba(205, 135, 216, 0.5)',
          hoverBackgroundColor: 'rgba(205, 135, 216, 1)',
        },
      ],
    }
  }, [data])

  return (
    <ChartBox className={className} title="일자별 연령대 확진자 수" size="medium">
      <Bar css={chartStyle} data={chartData} options={options} />
    </ChartBox>
  )
}

const chartStyle = css`
  max-height: 249px;
  // * canvas inline style 적용 방지
  width: 100% !important;
  height: 100% !important;
`
