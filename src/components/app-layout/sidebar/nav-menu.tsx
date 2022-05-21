import { ALink } from '@components/a-link'
import { Icon } from '@components/icon'
import { NAV_ITEMS } from '@constants/nav-items'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import React from 'react'

export const NavMenu = () => {
  const router = useRouter()

  const isPathMatch = (path: string): boolean => {
    return router.pathname === path
  }

  return (
    <nav css={rootStyle}>
      {NAV_ITEMS.map((item) => {
        const isActive = isPathMatch(item.path)
        return (
          <ALink key={item.name} href={item.path} css={itemStyle(isActive)}>
            <Icon name={item.icon} size={16} color={isActive ? 'inherit' : undefined} />
            <p css={labelStyle}>{item.name}</p>
          </ALink>
        )
      })}
    </nav>
  )
}

const rootStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 48px;

  & > *:not(:first-of-type) {
    margin-top: 10px;
  }
`

const itemStyle = (active: boolean) => css`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${active ? '#2878f0' : '#282828'};
  font-weight: ${active ? '700' : '400'};
`

const labelStyle = css`
  margin-left: 8px;
`
