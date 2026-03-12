import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MoreIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MoreIcon = forwardRef<SVGSVGElement, MoreIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="More"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 17 18zM11 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 11 18zM23 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 23 18z" />
    </svg>
  ),
)

MoreIcon.displayName = 'MoreIcon'
