import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CloudSunIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CloudSunIcon = forwardRef<SVGSVGElement, CloudSunIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CloudSun"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M14.7318 11.3802C14.07 11.766 13.4827 12.2653 12.9964 12.8512C12.9188 11.2635 11.607 10 10 10C8.34315 10 7 11.3431 7 13C7 14.0187 7.50779 14.9189 8.28407 15.4611C8.02815 15.835 7.82718 16.2494 7.6928 16.6928C7.44337 16.7684 7.2031 16.8651 6.97406 16.9807C5.77438 16.0674 5 14.6241 5 13C5 10.2386 7.23858 8 10 8C12.1945 8 14.0588 9.41377 14.7318 11.3802ZM22.9002 16.0012C22.4374 13.7184 20.4194 12 18 12C15.8374 12 13.9955 13.3729 13.2983 15.2947C12.9055 15.1058 12.4651 15 12 15C10.3431 15 9 16.3431 9 18C7.34314 18 6 19.3431 6 21C6 22.6569 7.34314 24 9 24H11H23C25.2091 24 27 22.2091 27 20C27 17.7809 25.1171 15.9472 22.9002 16.0012ZM23 22C24.1046 22 25 21.1046 25 20C25 18.8954 24.1046 18 23 18C22.7137 18 22.4301 18.0367 22.1499 18.0962C21.6068 18.2113 21 17.5551 21 17C21 15.3432 19.6569 14 18 14C16.2449 14 15.1626 15.151 14.7245 16.534C14.5099 17.2114 13.7936 17.6737 13.1486 17.3754C12.6937 17.1651 12.282 17 12 17C11.4477 17 11 17.4477 11 18C11.254 19.0159 10.4856 20 9.43845 20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H11H23Z" />
    </svg>
  ),
)

CloudSunIcon.displayName = 'CloudSunIcon'
