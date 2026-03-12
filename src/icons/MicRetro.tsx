import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MicRetroIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MicRetroIcon = forwardRef<SVGSVGElement, MicRetroIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MicRetro"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M9.98,24.9c0-.55.45-1,1-1h10c.55,0,1,.45,1,1s-.45,1-1,1h-10c-.55,0-1-.45-1-1Z' />
                <path d='M8.59,16.35c-.14-5.47-.15-10.26,6.94-10.1,4.71-.15,7.8,1.18,7.84,6.32.22,4.23.33,9.17-4.75,9.75-4.61.72-10.12.09-10.02-5.78v-.19ZM16.08,20.54c1.58-.02,3.51-.13,4.41-1.62,1.15-2.23,1.08-4.98.63-7.4-.48-3-2.84-3.35-5.53-3.28-3.05-.03-4.56,1.05-4.88,4.06-.26,2.27-.33,4.96.96,6.93,1.02,1.23,2.66,1.26,4.22,1.31h.19Z' />
                <path d='M15.98,22.4c-.34,0-.68,0-1,0v1.51h2v-1.51c-.32,0-.66,0-1,0Z' />
                <path d='M9.53,11.49c0-.55.45-1,1-1h2.5c.55,0,1,.45,1,1s-.45,1-1,1h-2.5c-.55,0-1-.45-1-1Z' />
                <path d='M9.53,14.4c0-.55.45-1,1-1h2.5c.55,0,1,.45,1,1s-.45,1-1,1h-2.5c-.55,0-1-.45-1-1Z' />
                <path d='M17.97,11.49c0-.55.45-1,1-1h2.5c.55,0,1,.45,1,1s-.45,1-1,1h-2.5c-.55,0-1-.45-1-1Z' />
                <path d='M17.97,14.43c0-.55.45-1,1-1h2.5c.55,0,1,.45,1,1s-.45,1-1,1h-2.5c-.55,0-1-.45-1-1Z' />
                <path d='M9.53,17.31c0-.55.45-1,1-1h2.5c.55,0,1,.45,1,1s-.45,1-1,1h-2.5c-.55,0-1-.45-1-1Z' />
                <path d='M17.97,17.31c0-.55.45-1,1-1h2.5c.55,0,1,.45,1,1s-.45,1-1,1h-2.5c-.55,0-1-.45-1-1Z' />
              </g>
    </svg>
  ),
)

MicRetroIcon.displayName = 'MicRetroIcon'
