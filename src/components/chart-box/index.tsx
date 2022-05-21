import { css, SerializedStyles } from '@emotion/react'
import React from 'react'

export type ChartBoxProp = {
  className?: string

  title: string
  children?: React.ReactNode

  size?: 'medium' | 'large'
}

export const ChartBox: React.FC<ChartBoxProp> = (props) => {
  const { className, title, children, size = 'large' } = props

  return (
    <div className={className} css={rootStyle}>
      <div css={titleWrapStyle(size)}>
        <h2 css={titleStyle}>{title}</h2>
      </div>

      <div css={chartWrapStyle(size)}>{children}</div>
    </div>
  )
}

type StyleProps = Required<ChartBoxProp>

const rootStyle = css`
  display: flex;
  flex-direction: column;
`

const titleWrapPaddingMap: { [key in StyleProps['size']]: SerializedStyles } = {
  medium: css`
    padding-top: 7px;
    padding-bottom: 5px;
  `,
  large: css`
    padding-top: 18px;
    padding-bottom: 12px;
  `,
}

const titleWrapStyle = (size: StyleProps['size']) => css`
  ${titleWrapPaddingMap[size]}

  border-bottom: 1px solid rgba(204, 204, 204, 0.5); ;
`

const titleStyle = css`
  padding: 12px 24px;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: bold;
`

const chartWrapPaddingMap: { [key in StyleProps['size']]: SerializedStyles } = {
  medium: css`
    padding-top: 55px;
    padding-bottom: 52px;
  `,
  large: css`
    padding-top: 88px;
    padding-bottom: 32px;
  `,
}

const chartWrapStyle = (size: StyleProps['size']) => css`
  ${chartWrapPaddingMap[size]}

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`
