import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface BrightnessKeyboardLowIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const BrightnessKeyboardLowIcon = forwardRef<SVGSVGElement, BrightnessKeyboardLowIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BrightnessKeyboardLow"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M22.0021 21.0328C22.0021 20.4808 21.5541 20.0328 21.0021 20.0328H11.0021C10.4501 20.0328 10.0021 20.4808 10.0021 21.0328C10.0021 21.5848 10.4501 22.0328 11.0021 22.0328H21.0021C21.5541 22.0328 22.0021 21.5848 22.0021 21.0328Z" />
            <circle cx="6.99766" cy="21.0277" r="1" />
            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 26 20.03)" />
            <circle cx="16" cy="12.0025" r="1" />
            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 23.361 13.6391)" />
            <circle cx="9.63169" cy="14.6367" r="1" />
          </>
    </svg>
  ),
)

BrightnessKeyboardLowIcon.displayName = 'BrightnessKeyboardLowIcon'
