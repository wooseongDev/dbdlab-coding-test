import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'

export type ALinkProps = {
  className?: string
  children?: React.ReactNode

  href: string
}

export const ALink: React.FC<ALinkProps> = (props) => {
  const { className, children, href } = props

  return (
    <Link href={href} passHref>
      <a className={className} css={rootStyle}>
        {children}
      </a>
    </Link>
  )
}

const rootStyle = css`
  display: inline-flex;
`
