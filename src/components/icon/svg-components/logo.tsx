import { SvgProps } from '@components/icon'
import React from 'react'

const LogoSvg: React.FC<SvgProps> = (props) => (
  <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="white" />
    <path
      d="M13.0264 7.89631L12.818 7.86327V2.40027H11.1824V7.86327L10.974 7.89631C8.79687 8.24518 7.2002 10.0789 7.2002 12.2285V17.9154C7.2002 18.3993 7.57418 18.823 8.06984 18.8551C8.61337 18.89 9.06814 18.4693 9.06814 17.9474V15.7522H14.9323V17.9154C14.9323 18.3993 15.3062 18.823 15.8019 18.8551C16.3454 18.891 16.8002 18.4693 16.8002 17.9474V12.2275C16.8002 10.0789 15.2025 8.24518 13.0264 7.89631Z"
      fill="black"
    />
    <path
      d="M14.6826 13.8546H9.31714V12.5144C9.31714 11.1255 10.472 10 11.8972 10H12.1016C13.5267 10 14.6816 11.1255 14.6816 12.5144L14.6826 13.8546Z"
      fill="#FAE62C"
    />
  </svg>
)

export const Logo = React.memo(LogoSvg)
