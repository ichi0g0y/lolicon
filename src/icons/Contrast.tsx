import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ContrastIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ContrastIcon = forwardRef<SVGSVGElement, ContrastIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Contrast"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6V26ZM16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28Z" />
    </svg>
  ),
)

ContrastIcon.displayName = 'ContrastIcon'
