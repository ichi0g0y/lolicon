import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface WaveformIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const WaveformIcon = forwardRef<SVGSVGElement, WaveformIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Waveform"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M15 23C15 23.552 15.448 24 16 24C16.552 24 17 23.552 17 23V9C17 8.448 16.552 8 16 8C15.448 8 15 8.448 15 9V23ZM12 22C11.448 22 11 21.552 11 21L11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11L13 21C13 21.552 12.552 22 12 22ZM20 20C19.448 20 19 19.552 19 19V13C19 12.448 19.448 12 20 12C20.552 12 21 12.448 21 13V19C21 19.552 20.552 20 20 20ZM8 19C7.448 19 7 18.552 7 18L7 14C7 13.448 7.448 13 8 13C8.552 13 9 13.448 9 14V18C9 18.552 8.552 19 8 19ZM23 17C23 17.552 23.448 18 24 18C24.552 18 25 17.552 25 17V15C25 14.448 24.552 14 24 14C23.448 14 23 14.448 23 15V17Z" />
    </svg>
  ),
)

WaveformIcon.displayName = 'WaveformIcon'
