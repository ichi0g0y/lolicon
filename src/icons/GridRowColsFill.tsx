import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface GridRowColsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const GridRowColsFillIcon = forwardRef<SVGSVGElement, GridRowColsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GridRowColsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M24.293 7.707C23.861 7.275 23.007 7 21 7H11C8.993 7 8.139 7.275 7.707 7.707C7.275 8.139 7 8.993 7 11C7 13.007 7.275 13.861 7.707 14.293C8.139 14.725 8.993 15 11 15H21C23.007 15 23.861 14.725 24.293 14.293C24.725 13.861 25 13.007 25 11C25 8.993 24.725 8.139 24.293 7.707ZM15 21C15 23.007 14.725 23.861 14.293 24.293C13.861 24.725 13.007 25 11 25C8.993 25 8.139 24.725 7.707 24.293C7.275 23.861 7 23.007 7 21C7 18.993 7.275 18.139 7.707 17.707C8.139 17.275 8.993 17 11 17C13.007 17 13.861 17.275 14.293 17.707C14.725 18.139 15 18.993 15 21ZM24.293 24.293C24.725 23.861 25 23.007 25 21C25 18.993 24.725 18.139 24.293 17.707C23.861 17.275 23.007 17 21 17C18.993 17 18.139 17.275 17.707 17.707C17.275 18.139 17 18.993 17 21C17 23.007 17.275 23.861 17.707 24.293C18.139 24.725 18.993 25 21 25C23.007 25 23.861 24.725 24.293 24.293Z" />
    </svg>
  ),
)

GridRowColsFillIcon.displayName = 'GridRowColsFillIcon'
