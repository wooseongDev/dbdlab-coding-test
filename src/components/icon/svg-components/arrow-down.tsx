import { SvgProps } from '@components/icon'
import React from 'react'

const ArrowDownSvg: React.FC<SvgProps> = (props) => (
  <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowDown = React.memo(ArrowDownSvg)
