import { ChartBox } from '@components/chart-box'
import { css } from '@emotion/react'
import { Covid19Item } from '@tools/api/requests/get-covid19-inf-state'
import { ChartData, ChartOptions } from 'chart.js'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { Line } from 'react-chartjs-2'

type CovidDailyChartProps = {
  className?: string

  data: Covid19Item[]
}

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

export const CovidDailyChart: React.FC<CovidDailyChartProps> = (props) => {
  const { className, data } = props

  const chartData = useMemo((): ChartData<'line', string[], string> => {
    const labels = data.map((item) => dayjs(item.stateDt).format('MM/DD'))

    return {
      labels,
      datasets: [
        {
          label: 'stateDt',
          data: data.map((item) => item.decideCnt),
          borderColor: '#E79997',
          borderWidth: 4,
        },
      ],
    }
  }, [data])

  return (
    <ChartBox className={className} title="코로나 일자별 확진자 수">
      <Line css={chartStyle} data={chartData} options={options} />
    </ChartBox>
  )
}

const chartStyle = css`
  max-width: 840px;
  max-height: 274px;
  // * canvas inline style 적용 방지
  width: 100% !important;
  height: 100% !important;
`
