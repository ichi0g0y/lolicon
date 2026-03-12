import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AlignLeftIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AlignLeftIcon = forwardRef<SVGSVGElement, AlignLeftIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AlignLeft"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M7.5 11a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 21c0-.552.414-1 .923-1h10.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.423c-.51 0-.923-.448-.923-1z" />
    </svg>
  ),
)

AlignLeftIcon.displayName = 'AlignLeftIcon'
