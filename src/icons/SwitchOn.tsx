import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface SwitchOnIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const SwitchOnIcon = forwardRef<SVGSVGElement, SwitchOnIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SwitchOn"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M4 16C4 12.6863 6.68629 10 10 10H22C25.3137 10 28 12.6863 28 16C28 19.3137 25.3137 22 22 22H10C6.68629 22 4 19.3137 4 16ZM22 19.5C23.933 19.5 25.5 17.933 25.5 16C25.5 14.067 23.933 12.5 22 12.5C20.067 12.5 18.5 14.067 18.5 16C18.5 17.933 20.067 19.5 22 19.5Z" />
    </svg>
  ),
)

SwitchOnIcon.displayName = 'SwitchOnIcon'
