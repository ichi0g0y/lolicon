import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface SunglassesIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const SunglassesIcon = forwardRef<SVGSVGElement, SunglassesIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sunglasses"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M9.50397 21C12.2654 21 14.504 18.7614 14.504 16H17.496C17.496 18.7614 19.7346 21 22.496 21C25.2575 21 27.496 18.7614 27.496 16C27.496 13.2386 25.2575 11 22.496 11C22.2606 11 22.0289 11.0163 21.8021 11.0478C21.7056 11.0168 21.6028 11 21.496 11H9.49603L9.48962 11C6.7348 11.0078 4.50397 13.2434 4.50397 16C4.50397 18.7614 6.74254 21 9.50397 21ZM18.4957 13H13.5043C13.7355 13.3077 13.9319 13.643 14.0879 14H17.9121C18.0681 13.643 18.2645 13.3077 18.4957 13Z" />
    </svg>
  ),
)

SunglassesIcon.displayName = 'SunglassesIcon'
