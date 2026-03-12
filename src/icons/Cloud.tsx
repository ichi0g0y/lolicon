import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CloudIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CloudIcon = forwardRef<SVGSVGElement, CloudIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cloud"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17 9C19.4194 9 21.4374 10.7184 21.9002 13.0012C24.1171 12.9472 26 14.7809 26 17C26 19.2091 24.2091 21 22 21H10H8C6.34314 21 5 19.6569 5 18C5 16.3431 6.34314 15 8 15C8 13.3431 9.34314 12 11 12C11.4651 12 11.9055 12.1058 12.2983 12.2947C12.9955 10.3729 14.8374 9 17 9ZM24 17C24 18.1046 23.1046 19 22 19H10H8C7.44772 19 7 18.5523 7 18C7 17.4477 7.44772 17 8 17H8.43845C9.48563 17 10.254 16.0159 10 15C10 14.4477 10.4477 14 11 14C11.282 14 11.6937 14.1651 12.1486 14.3754C12.7936 14.6737 13.5099 14.2114 13.7245 13.534C14.1626 12.151 15.2449 11 17 11C18.6569 11 20 12.3432 20 14C20 14.5551 20.6068 15.2113 21.1499 15.0962C21.4301 15.0367 21.7137 15 22 15C23.1046 15 24 15.8954 24 17Z" />
    </svg>
  ),
)

CloudIcon.displayName = 'CloudIcon'
