import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MapPinIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MapPinIcon = forwardRef<SVGSVGElement, MapPinIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MapPin"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14ZM16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16Z" />
            <path d="M16 6C12.134 6 9 9.13401 9 13C9 15.7939 10.0663 18.365 11.442 20.514C12.8161 22.6604 14.4624 24.3281 15.529 25.2945C15.8067 25.5461 16.1933 25.5461 16.471 25.2945C17.5376 24.3281 19.1839 22.6604 20.558 20.514C21.9337 18.365 23 15.7939 23 13C23 9.13401 19.866 6 16 6ZM7 13C7 8.02944 11.0294 4 16 4C20.9706 4 25 8.02944 25 13C25 16.3034 23.7427 19.2486 22.2424 21.5923C20.7403 23.9387 18.9578 25.7402 17.8138 26.7766C16.7741 27.7187 15.2259 27.7187 14.1862 26.7766C13.0422 25.7402 11.2597 23.9387 9.75764 21.5923C8.25725 19.2486 7 16.3034 7 13Z" />
          </>
    </svg>
  ),
)

MapPinIcon.displayName = 'MapPinIcon'
