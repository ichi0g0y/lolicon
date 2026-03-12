import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface WifiIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const WifiIcon = forwardRef<SVGSVGElement, WifiIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wifi"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M17.314 23a2 2 0 1 0-2.828-2.828A2 2 0 0 0 17.314 23z" />
            <path d="M5.293 13.808a1 1 0 0 1 0-1.415c5.858-5.857 15.355-5.857 21.213 0a1 1 0 0 1-1.414 1.415c-5.077-5.077-13.308-5.077-18.385 0a1 1 0 0 1-1.414 0z" />
            <path d="M9.536 18.05a1 1 0 0 1 0-1.414 9 9 0 0 1 12.728 0 1 1 0 0 1-1.415 1.414 7 7 0 0 0-9.9 0 1 1 0 0 1-1.413 0z" />
          </>
    </svg>
  ),
)

WifiIcon.displayName = 'WifiIcon'
