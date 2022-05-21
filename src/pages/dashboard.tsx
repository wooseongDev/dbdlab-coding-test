import { CovidAgeDailyChart } from '@components/covid-age-daily-chart'
import { CovidDailyChart } from '@components/covid-daily-chart'
import { CovidGenderDailyChart } from '@components/covid-gender-daily-chart'
import { css } from '@emotion/react'
import { api } from '@tools/api'
import { Covid19GenAgeCaseItem } from '@tools/api/requests/get-covid19-gen-age-case-inf'
import { Covid19Item } from '@tools/api/requests/get-covid19-inf-state'
import { sortBy } from 'lodash'
import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'

type DashboardProps = {
  covid19Items: Covid19Item[]
  genAgeCaseItems: Covid19GenAgeCaseItem[]
}

const Dashboard: NextPage<DashboardProps> = (props) => {
  const { covid19Items, genAgeCaseItems } = props

  return (
    <div css={rootStyle}>
      <CovidDailyChart css={covidDailyChartStyle} data={covid19Items} />

      <div css={chartWrapStyle}>
        <CovidAgeDailyChart css={covidAgeDailyChartStyle} data={genAgeCaseItems} />
        <CovidGenderDailyChart css={covidGenderDailyChartStyle} data={genAgeCaseItems} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { items: covid19InfState } = await api.getCovid19InfState()
  const { items: covid19GenAgeCaseInf } = await api.getCovid19GenAgeCaseInf()

  const covid19Items = sortBy(covid19InfState.item, (item) => item.stateDt)
  const genAgeCaseItems = sortBy(covid19GenAgeCaseInf.item, (item) => item.stateDt)

  return {
    props: {
      covid19Items,
      genAgeCaseItems,
    },
  }
}

const rootStyle = css`
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px 0 0 4px;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.04);
`

const covidDailyChartStyle = css`
  border-bottom: 1px solid rgba(204, 204, 204, 0.5);
`

const chartWrapStyle = css`
  display: flex;
`

const covidAgeDailyChartStyle = css`
  flex-basis: 50%;
  border-right: 1px solid rgba(204, 204, 204, 0.5);
`

const covidGenderDailyChartStyle = css`
  flex-basis: 50%;
`

export default Dashboard
