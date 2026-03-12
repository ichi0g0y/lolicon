import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface GridRowsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const GridRowsFillIcon = forwardRef<SVGSVGElement, GridRowsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GridRowsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21 17C23.007 17 23.861 17.275 24.293 17.707C24.725 18.139 25 18.993 25 21C25 23.007 24.725 23.861 24.293 24.293C23.861 24.725 23.007 25 21 25H11C8.993 25 8.139 24.725 7.707 24.293C7.275 23.861 7 23.007 7 21C7 18.993 7.275 18.139 7.707 17.707C8.139 17.275 8.993 17 11 17H21ZM21 7C23.007 7 23.861 7.275 24.293 7.707C24.725 8.139 25 8.993 25 11C25 13.007 24.725 13.861 24.293 14.293C23.861 14.725 23.007 15 21 15H11C8.993 15 8.139 14.725 7.707 14.293C7.275 13.861 7 13.007 7 11C7 8.993 7.275 8.139 7.707 7.707C8.139 7.275 8.993 7 11 7H21Z" />
    </svg>
  ),
)

GridRowsFillIcon.displayName = 'GridRowsFillIcon'
