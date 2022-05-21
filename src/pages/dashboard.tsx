import { CovidDailyChart } from '@components/covid-daily-chart'
import { css } from '@emotion/react'
import { api } from '@tools/api'
import type { GenAgeCaseItem } from '@tools/api/get-covid19-gen-age-case-inf'
import type { Covid19Item } from '@tools/api/get-covid19-inf-state'
import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'

type DashboardProps = {
  covid19Items: Covid19Item[]
  genAgeCaseItems: GenAgeCaseItem[]
}

const Dashboard: NextPage<DashboardProps> = (props) => {
  const { covid19Items, genAgeCaseItems } = props

  return (
    <div css={rootStyle}>
      <CovidDailyChart data={covid19Items} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { items: covid19InfState } = await api.getCovid19InfState()
  const { items: covid19GenAgeCaseInf } = await api.getCovid19GenAgeCaseInf()

  return {
    props: {
      covid19Items: covid19InfState.item,
      genAgeCaseItems: covid19GenAgeCaseInf.item,
    },
  }
}

const rootStyle = css`
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px 0 0 4px;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.04);
`

const textStyle = css`
  padding: 48px;
  font-size: 20px;
`

export default Dashboard
