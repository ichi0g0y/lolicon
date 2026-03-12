import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface GridColsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const GridColsFillIcon = forwardRef<SVGSVGElement, GridColsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GridColsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M15 21C15 23.007 14.725 23.861 14.293 24.293C13.861 24.725 13.007 25 11 25C8.993 25 8.139 24.725 7.707 24.293C7.275 23.861 7 23.007 7 21V11C7 8.993 7.275 8.139 7.707 7.707C8.139 7.275 8.993 7 11 7C13.007 7 13.861 7.275 14.293 7.707C14.725 8.139 15 8.993 15 11V21ZM25 21C25 23.007 24.725 23.861 24.293 24.293C23.861 24.725 23.007 25 21 25C18.993 25 18.139 24.725 17.707 24.293C17.275 23.861 17 23.007 17 21V11C17 8.993 17.275 8.139 17.707 7.707C18.139 7.275 18.993 7 21 7C23.007 7 23.861 7.275 24.293 7.707C24.725 8.139 25 8.993 25 11V21Z" />
    </svg>
  ),
)

GridColsFillIcon.displayName = 'GridColsFillIcon'
