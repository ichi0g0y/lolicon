import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface NotificationOffFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const NotificationOffFillIcon = forwardRef<SVGSVGElement, NotificationOffFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NotificationOffFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M29 7C29 9.20914 27.2091 11 25 11C22.7909 11 21 9.20914 21 7C21 4.79086 22.7909 3 25 3C27.2091 3 29 4.79086 29 7Z" />
            <path d="M3.51473 3.51469C3.90505 3.12437 4.53862 3.12437 4.92894 3.51469L28.4853 27.0711C28.8756 27.4614 28.8756 28.0949 28.4853 28.4853C28.095 28.8756 27.4614 28.8756 27.0711 28.4853L3.51473 4.92891C3.1244 4.53858 3.1244 3.90502 3.51473 3.51469Z" />
            <path d="M20.823 4.25078C19.4705 4.07039 17.876 4 16 4C12.4311 4 9.88123 4.25473 8.07752 5.03693L26.9631 23.9225C27.7453 22.1188 28 19.5689 28 16C28 14.124 27.9296 12.5295 27.7492 11.177C26.9604 11.6972 26.0156 12 25 12C22.2386 12 20 9.76142 20 7C20 5.98443 20.3028 5.03957 20.823 4.25078ZM21.9308 4.43466C21.3498 5.1291 21 6.0237 21 7C21 9.20914 22.7909 11 25 11C25.9763 11 26.8709 10.6502 27.5653 10.0692C26.885 6.71702 25.283 5.11505 21.9308 4.43466ZM4 16C4 12.4311 4.25474 9.8812 5.03695 8.07748L23.9225 26.963C22.1188 27.7453 19.5689 28 16 28C6 28 4 26 4 16ZM24.9752 26.3894C25.5393 26.0058 26.0058 25.5393 26.3894 24.9752L7.0248 5.61056C6.46073 5.99415 5.99418 6.4607 5.61058 7.02477L24.9752 26.3894Z" />
          </>
    </svg>
  ),
)

NotificationOffFillIcon.displayName = 'NotificationOffFillIcon'
