import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AudioRectIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AudioRectIcon = forwardRef<SVGSVGElement, AudioRectIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AudioRect"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M16,6c8.88,0,10,1.12,10,10s-1.12,10-10,10-10-1.12-10-10,1.12-10,10-10M16,4c-10,0-12,2-12,12s2,12,12,12,12-2,12-12-2-12-12-12h0Z' />
                <path d='M16.49,9.27c.77-.4,1.52-.02,2.41.51,1.49.9,2.57,1.19,3.93,1.54-.43,1.28-1.48,1.69-2.39,1.72-.98.03-2.5-1.26-2.89-1.65-.91,3.13.42,6.51.46,8.3.02.94-.17,1.75-.78,2.35-.57.57-1.49.84-2.49.84-1.07,0-1.9-.25-2.51-.75-.61-.5-1.04-1.23-1.04-1.93,0-.93.25-1.51.55-1.96s.78-.79,1.44-1c.48-.15.93-.2,1.35-.14s.88.16,1.37.33c0,0-1.35-7.16.59-8.15Z' />
              </g>
    </svg>
  ),
)

AudioRectIcon.displayName = 'AudioRectIcon'
