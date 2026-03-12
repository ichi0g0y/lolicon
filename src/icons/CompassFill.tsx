import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CompassFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CompassFillIcon = forwardRef<SVGSVGElement, CompassFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CompassFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28ZM21.8239 11.5359C22.0408 11.1456 21.9726 10.6589 21.6569 10.3432C21.3412 10.0274 20.8544 9.95927 20.4641 10.1761L15.0992 13.1566C14.283 13.6101 13.6101 14.283 13.1566 15.0992L10.1761 20.4641C9.95928 20.8544 10.0275 21.3412 10.3432 21.6569C10.6589 21.9726 11.1456 22.0407 11.5359 21.8239L16.9008 18.8434C17.717 18.39 18.39 17.717 18.8434 16.9008L21.8239 11.5359ZM16.0705 14.9049L18.3759 13.6242L17.0951 15.9295C16.823 16.4193 16.4193 16.823 15.9296 17.0951L13.6242 18.3758L14.9049 16.0705C15.177 15.5808 15.5808 15.177 16.0705 14.9049Z" />
    </svg>
  ),
)

CompassFillIcon.displayName = 'CompassFillIcon'
