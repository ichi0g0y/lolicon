import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AudioFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AudioFillIcon = forwardRef<SVGSVGElement, AudioFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AudioFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d='M16.1,4.29c1.34-.69,2.65-.03,4.19.9,2.6,1.57,4.47,2.07,6.84,2.68-.75,2.22-2.57,2.94-4.16,3-1.71.06-4.35-2.2-5.04-2.87-1.58,5.46.73,11.33.8,14.46.04,1.64-.3,3.04-1.36,4.09-1,.99-2.59,1.46-4.33,1.46-1.86,0-3.32-.44-4.37-1.3-1.06-.87-1.81-2.15-1.81-3.36,0-1.62.44-2.63.97-3.42s1.36-1.37,2.5-1.75c.83-.26,1.62-.35,2.36-.25s1.53.29,2.39.57c0,0-2.36-12.46,1.03-14.2Z' />
    </svg>
  ),
)

AudioFillIcon.displayName = 'AudioFillIcon'
