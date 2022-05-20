import { css } from '@emotion/react'
import type { NextPage } from 'next'
import React from 'react'

const Dashboard: NextPage = () => {
  return (
    <div css={rootStyle}>
      <p css={textStyle}>디비디랩 프론트엔드 사전과제</p>
    </div>
  )
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
