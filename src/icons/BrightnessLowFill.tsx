import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface BrightnessLowFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const BrightnessLowFillIcon = forwardRef<SVGSVGElement, BrightnessLowFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BrightnessLowFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <circle cx="9.82578" cy="9.83857" r="1" />
            <circle cx="9.82578" cy="9.83857" r="1" />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(-1 0 0 1 23.4045 8.84091)"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(-1 0 0 1 23.4045 8.84091)"
            />
            <circle cx="16" cy="7" r="1" />
            <circle cx="16" cy="7" r="1" />
            <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 6 17.1647)" />
            <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 6 17.1647)" />
            <circle
              cx="25.0023"
              cy="16.167"
              r="1"
              transform="rotate(-180 25.0023 16.167)"
            />
            <circle
              cx="25.0023"
              cy="16.167"
              r="1"
              transform="rotate(-180 25.0023 16.167)"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 8.82812 23.3517)"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 8.82812 23.3517)"
            />
            <circle
              cx="22.4069"
              cy="22.354"
              r="1"
              transform="rotate(-180 22.4069 22.354)"
            />
            <circle
              cx="22.4069"
              cy="22.354"
              r="1"
              transform="rotate(-180 22.4069 22.354)"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 15.0023 26.1899)"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 15.0023 26.1899)"
            />
            <circle cx="16" cy="16" r="6" />
          </>
    </svg>
  ),
)

BrightnessLowFillIcon.displayName = 'BrightnessLowFillIcon'
