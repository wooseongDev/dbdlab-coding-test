import { SvgProps } from '@components/icon'
import React from 'react'

const ResearchSvg: React.FC<SvgProps> = (props) => (
  <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.66671 2.66663H2.66671C1.93337 2.66663 1.34004 3.26663 1.34004 3.99996L1.33337 12C1.33337 12.7333 1.93337 13.3333 2.66671 13.3333H13.3334C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33329C14.6667 4.59996 14.0667 3.99996 13.3334 3.99996H8.00004L6.66671 2.66663Z"
      fill="currentColor"
    />
  </svg>
)

export const Research = React.memo(ResearchSvg)
