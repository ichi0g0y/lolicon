import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface DashboardMeterIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const DashboardMeterIcon = forwardRef<SVGSVGElement, DashboardMeterIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DashboardMeter"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M26 16C26 18.7255 24.9097 21.1963 23.1415 23.0001C21.3266 21.1487 18.7974 20 16 20C13.2026 20 10.6734 21.1487 8.85852 23.0001C7.09028 21.1963 6 18.7255 6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16ZM16 22C18.1802 22 20.1567 22.8721 21.5996 24.2865C20.002 25.3682 18.0748 26 16 26C13.9252 26 11.9981 25.3682 10.4004 24.2865C11.8434 22.8721 13.8198 22 16 22ZM16 28C13.4558 28 11.0963 27.208 9.15486 25.8572C8.60111 25.4719 8.08136 25.0412 7.60101 24.5704C5.37883 22.3924 4 19.3571 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 19.3571 26.6212 22.3924 24.399 24.5704C23.9187 25.0412 23.3989 25.4719 22.8452 25.8572C20.9037 27.208 18.5443 28 16 28ZM14.6005 17.4141C13.8195 16.6331 13.8195 15.3668 14.6005 14.5857C15.0529 14.1333 18.441 12.0295 21.2124 10.3389C21.9701 9.87672 22.7848 10.8004 22.2334 11.4959C20.2714 13.9707 17.8767 16.9664 17.4289 17.4141C16.6479 18.1952 15.3816 18.1952 14.6005 17.4141Z" />
    </svg>
  ),
)

DashboardMeterIcon.displayName = 'DashboardMeterIcon'
