import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TypographyIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TypographyIcon = forwardRef<SVGSVGElement, TypographyIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Typography"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M5 6C5 5.44772 5.44772 5 6 5H26C26.5523 5 27 5.44772 27 6V10C27 10.5523 26.5523 11 26 11C25.4477 11 25 10.5523 25 10V7H17V25H20C20.5523 25 21 25.4477 21 26C21 26.5523 20.5523 27 20 27H12C11.4477 27 11 26.5523 11 26C11 25.4477 11.4477 25 12 25H15V7H7V10C7 10.5523 6.55228 11 6 11C5.44772 11 5 10.5523 5 10V6Z" />
    </svg>
  ),
)

TypographyIcon.displayName = 'TypographyIcon'
