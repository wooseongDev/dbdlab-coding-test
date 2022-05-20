import { css } from '@emotion/react'
import React, { useMemo } from 'react'

import * as svgComponents from './svg-components'

export type IconName = keyof typeof svgComponents

export type IconProps = {
  className?: string

  name: IconName

  size?: number
  color?: string
}

export type SvgProps = Required<Pick<IconProps, 'size'>>

export const Icon: React.FC<IconProps> = (props) => {
  const { className, name, size = 16, color = '#3C3C46' } = props

  const SvgComponent = useMemo(() => svgComponents[name], [name])

  return (
    <div className={className} css={rootStyle({ size, color })}>
      <SvgComponent size={size} />
    </div>
  )
}

const rootStyle = (props: Required<Pick<IconProps, 'size' | 'color'>>) => css`
  width: ${props.size}px;
  height: ${props.size}px;
  color: ${props.color};
`
