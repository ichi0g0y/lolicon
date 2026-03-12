import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TvFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TvFillIcon = forwardRef<SVGSVGElement, TvFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TvFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M10 25C10 24.448 10.448 24 11 24H15H17H21C21.552 24 22 24.448 22 25C22 25.552 21.552 26 21 26H11C10.448 26 10 25.552 10 25Z" />
            <path d="M16 6C15.2887 6 14.623 6.00745 14 6.02362C5.7919 6.23651 5 7.95856 5 14C5 20.0414 5.7919 21.7635 14 21.9764C14.3218 21.9847 14.655 21.9908 15 21.9946V24H17V21.9946C26.1448 21.8919 27 20.2783 27 14C27 7.5 26.0833 6 16 6Z" />
          </>
    </svg>
  ),
)

TvFillIcon.displayName = 'TvFillIcon'
