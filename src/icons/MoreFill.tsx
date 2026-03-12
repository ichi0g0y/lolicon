import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MoreFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MoreFillIcon = forwardRef<SVGSVGElement, MoreFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MoreFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16.5 28c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1.232-11a2 2 0 1 0 3.463-1.999A2 2 0 0 0 15.267 17zM11 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 11 18zm10.267-1a2 2 0 1 0 3.464-1.999A2 2 0 0 0 21.267 17z" />
    </svg>
  ),
)

MoreFillIcon.displayName = 'MoreFillIcon'
