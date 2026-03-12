import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface YoutubeFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const YoutubeFillIcon = forwardRef<SVGSVGElement, YoutubeFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="YoutubeFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-14.473 3.127l6.48-3.36-6.485-3.383.005 6.742z" />
    </svg>
  ),
)

YoutubeFillIcon.displayName = 'YoutubeFillIcon'
