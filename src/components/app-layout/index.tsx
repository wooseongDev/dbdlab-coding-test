import { css } from '@emotion/react'
import React from 'react'

import { Sidebar } from './sidebar'

export type AppLayoutProp = {
  children?: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProp> = (props) => {
  const { children } = props

  return (
    <div css={rootStyle}>
      <Sidebar css={sidebarStyle} />

      <main css={mainStyle}>{children}</main>
    </div>
  )
}

const rootStyle = css`
  display: flex;
  // sidebar width + gap
  padding-left: calc(252px + 23px);
  width: 100%;
  min-height: 100vh;
`

const sidebarStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  flex-shrink: 0;
`

const mainStyle = css`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 28px;
`
