import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CloudSunFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CloudSunFillIcon = forwardRef<SVGSVGElement, CloudSunFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CloudSunFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.97406 16.9807C7.2031 16.8651 7.44337 16.7684 7.6928 16.6928C8.25284 14.845 9.96935 13.5 12 13.5C12.1703 13.5 12.3386 13.5095 12.5043 13.5281C13.0627 12.646 13.8278 11.9072 14.7318 11.3802C14.0588 9.41377 12.1945 8 10 8C7.23858 8 5 10.2386 5 13C5 14.6241 5.77438 16.0674 6.97406 16.9807ZM22.9002 16.0012C22.4374 13.7184 20.4194 12 18 12C15.8374 12 13.9955 13.3729 13.2983 15.2947C12.9055 15.1058 12.4651 15 12 15C10.3431 15 9 16.3431 9 18C7.34314 18 6 19.3431 6 21C6 22.6569 7.34314 24 9 24H11H23C25.2091 24 27 22.2091 27 20C27 17.7809 25.1171 15.9472 22.9002 16.0012Z" />
    </svg>
  ),
)

CloudSunFillIcon.displayName = 'CloudSunFillIcon'
