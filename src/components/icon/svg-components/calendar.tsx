import { SvgProps } from '@components/icon'
import React from 'react'

const CalendarSvg: React.FC<SvgProps> = (props) => (
  <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.3333 8.15H8V11.4H11.3333V8.15ZM10.6667 1V2.3H5.33333V1H4V2.3H3.33333C2.59333 2.3 2.00667 2.885 2.00667 3.6L2 12.7C2 13.415 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.415 14 12.7V3.6C14 2.885 13.4 2.3 12.6667 2.3H12V1H10.6667ZM12.6667 12.7H3.33333V5.55H12.6667V12.7Z"
      fill="currentColor"
    />
  </svg>
)

export const Calendar = React.memo(CalendarSvg)
