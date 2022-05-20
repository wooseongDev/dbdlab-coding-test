import { SvgProps } from '@components/icon'
import React from 'react'

const DashboardSvg: React.FC<SvgProps> = (props) => (
  <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM6 11.3333H4.66667V6.66667H6V11.3333ZM8.66667 11.3333H7.33333V4.66667H8.66667V11.3333ZM11.3333 11.3333H10V8.66667H11.3333V11.3333Z"
      fill="currentColor"
    />
  </svg>
)

export const Dashboard = React.memo(DashboardSvg)
