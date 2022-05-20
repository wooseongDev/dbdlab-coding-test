import { css } from '@emotion/react'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div css={containerStyle}>
      <p css={textStyle}>디비디랩 프론트엔드 사전과제</p>
    </div>
  )
}

const containerStyle = css`
  padding: 48px;
`

const textStyle = css`
  font-size: 20px;
`

export default Home
