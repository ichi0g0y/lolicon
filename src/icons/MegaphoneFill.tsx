import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MegaphoneFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MegaphoneFillIcon = forwardRef<SVGSVGElement, MegaphoneFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MegaphoneFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d='M25.43,14.1c-2.98-8.19-4.61-7.6-5.22-7.38-.73.26-2.32,1.79-6.75,6.24-1.41,1.42-3,3.01-3.53,3.47-.34-.01-1.05-.12-1.55-.2-1.92-.29-2.98-.45-3.4.46-.12.25-.48,1.02.83,4.6,1.27,3.48,2.01,3.83,2.29,3.96.93.43,1.7-.41,3.09-1.95.28-.31.68-.75.91-.96.69.02,2.66.19,4.43.34,6.48.55,8.92.7,9.66.43.61-.22,2.24-.81-.74-9.01Z' />
    </svg>
  ),
)

MegaphoneFillIcon.displayName = 'MegaphoneFillIcon'
