import { NavMenu } from '@components/app-layout/sidebar/nav-menu'
import { Icon } from '@components/icon'
import { css } from '@emotion/react'
import React from 'react'

export type SidebarProps = {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props

  return (
    <aside className={className} css={rootStyle}>
      <div css={logoWrapStyle}>
        <Icon name="Logo" size={24} />
        <p css={labelStyle}>DBDLAB Corp.</p>
      </div>

      <NavMenu />
    </aside>
  )
}

const rootStyle = css`
  padding-top: 48px;
  padding-bottom: 48px;
  width: 252px;
  height: 100%;
  background-color: #f8f8f8;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const logoWrapStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
  padding-left: 48px;
  font-weight: 700;
`

const labelStyle = css`
  margin-left: 8px;
`
