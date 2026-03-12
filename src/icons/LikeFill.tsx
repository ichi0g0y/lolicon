import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface LikeFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const LikeFillIcon = forwardRef<SVGSVGElement, LikeFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LikeFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path
            d="M25.982 9.75c-2-2-6-3-10 1-4-4-8-3-10-1-8 8 7 17 10 17s18-9 10-17z"
            fillRule="nonzero"
          />
    </svg>
  ),
)

LikeFillIcon.displayName = 'LikeFillIcon'
