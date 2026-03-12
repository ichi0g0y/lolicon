import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface GridColRowsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const GridColRowsFillIcon = forwardRef<SVGSVGElement, GridColRowsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GridColRowsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M7.707 7.707C7.275 8.139 7 8.993 7 11L7 21C7 23.007 7.275 23.861 7.707 24.293C8.139 24.725 8.993 25 11 25C13.007 25 13.861 24.725 14.293 24.293C14.725 23.861 15 23.007 15 21L15 11C15 8.993 14.725 8.139 14.293 7.707C13.861 7.275 13.007 7 11 7C8.993 7 8.139 7.275 7.707 7.707Z" />
            <path d="M21 17C23.007 17 23.861 17.275 24.293 17.707C24.725 18.139 25 18.993 25 21C25 23.007 24.725 23.861 24.293 24.293C23.861 24.725 23.007 25 21 25C18.993 25 18.139 24.725 17.707 24.293C17.275 23.861 17 23.007 17 21C17 18.993 17.275 18.139 17.707 17.707C18.139 17.275 18.993 17 21 17Z" />
            <path d="M21 7C23.007 7 23.861 7.275 24.293 7.707C24.725 8.139 25 8.993 25 11C25 13.007 24.725 13.861 24.293 14.293C23.861 14.725 23.007 15 21 15C18.993 15 18.139 14.725 17.707 14.293C17.275 13.861 17 13.007 17 11C17 8.993 17.275 8.139 17.707 7.707C18.139 7.275 18.993 7 21 7Z" />
          </>
    </svg>
  ),
)

GridColRowsFillIcon.displayName = 'GridColRowsFillIcon'
