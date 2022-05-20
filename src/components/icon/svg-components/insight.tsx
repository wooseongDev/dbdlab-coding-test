import { SvgProps } from '@components/icon'
import React from 'react'

const InsightSvg: React.FC<SvgProps> = (props) => (
  <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V8C2 8.73333 2.6 9.33333 3.33333 9.33333H12.6667C13.4 9.33333 14 8.73333 14 8V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 6H10C10 7.08 9.08 8 8 8C6.92 8 6 7.08 6 6H3.33333V3.33333H12.6667V6ZM10 10.6667H14V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.6 14 2 13.4 2 12.6667V10.6667H6C6 11.7733 6.89333 12.6667 8 12.6667C9.10667 12.6667 10 11.7733 10 10.6667Z"
      fill="currentColor"
    />
  </svg>
)

export const Insight = React.memo(InsightSvg)
