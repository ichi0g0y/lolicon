import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PlusFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PlusFillIcon = forwardRef<SVGSVGElement, PlusFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PlusFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16,4c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-1,8c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,3l3,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-3,0l0,3c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1l0,-3l-3,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l3,0l0,-3Z" />
    </svg>
  ),
)

PlusFillIcon.displayName = 'PlusFillIcon'
