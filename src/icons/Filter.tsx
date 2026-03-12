import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface FilterIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const FilterIcon = forwardRef<SVGSVGElement, FilterIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Filter"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M9.5 12C8.94772 12 8.5 12.4477 8.5 13C8.5 13.5523 8.94772 14 9.5 14H22.5C23.0523 14 23.5 13.5523 23.5 13C23.5 12.4477 23.0523 12 22.5 12H9.5Z" />
            <path d="M10.5 17C10.5 16.4477 10.9477 16 11.5 16H20.5C21.0523 16 21.5 16.4477 21.5 17C21.5 17.5523 21.0523 18 20.5 18H11.5C10.9477 18 10.5 17.5523 10.5 17Z" />
            <path d="M13.5 20C12.9477 20 12.5 20.4477 12.5 21C12.5 21.5523 12.9477 22 13.5 22H18.5C19.0523 22 19.5 21.5523 19.5 21C19.5 20.4477 19.0523 20 18.5 20H13.5Z" />
            <path d="M16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28ZM16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26Z" />
          </>
    </svg>
  ),
)

FilterIcon.displayName = 'FilterIcon'
