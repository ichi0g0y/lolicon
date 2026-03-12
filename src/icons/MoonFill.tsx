import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MoonFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MoonFillIcon = forwardRef<SVGSVGElement, MoonFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MoonFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M26.1197 22.6849C26.6747 21.9485 25.8563 21.0399 24.9529 21.2251C24.1704 21.3855 23.3602 21.4698 22.5303 21.4698C15.9029 21.4698 10.5303 16.0972 10.5303 9.46976C10.5303 8.63983 10.6145 7.82959 10.7749 7.04711C10.9601 6.14378 10.0515 5.32533 9.3151 5.8803C6.40906 8.07028 4.53027 11.5506 4.53027 15.4698C4.53027 22.0972 9.90286 27.4698 16.5303 27.4698C20.4494 27.4698 23.9298 25.591 26.1197 22.6849Z" />
    </svg>
  ),
)

MoonFillIcon.displayName = 'MoonFillIcon'
