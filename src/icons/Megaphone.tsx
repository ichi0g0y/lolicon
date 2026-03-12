import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MegaphoneIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MegaphoneIcon = forwardRef<SVGSVGElement, MegaphoneIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Megaphone"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d='M8.56,25.37c-.16,0-.32-.04-.48-.11h0c-1.36-.64-3.75-7.19-3.11-8.56.42-.91,1.48-.75,3.4-.46.5.07,1.21.18,1.55.2.54-.46,2.12-2.05,3.53-3.47,4.43-4.45,6.02-5.98,6.75-6.24.29-.11.88-.2,1.55.37,2.14,1.8,5.85,11.99,5.36,14.74-.15.87-.66,1.17-.95,1.28-.74.27-3.18.12-9.66-.43-1.76-.15-3.74-.32-4.42-.33-.23.22-.62.66-.91.96-1.15,1.27-1.87,2.06-2.61,2.06ZM6.9,18.05c.27,1.31,1.19,3.83,1.81,4.97.32-.32.71-.75.99-1.06.95-1.05,1.29-1.4,1.7-1.54.35-.13.71-.12,5.28.27,2.73.23,7.11.61,8.52.56.15-2.19-3.03-10.9-4.54-12.47-.99.79-3.94,3.76-5.77,5.6-3.5,3.52-3.85,3.82-4.24,3.97-.47.17-1.07.1-2.56-.12-.33-.05-.79-.12-1.17-.16ZM6.83,17.39h0ZM10.06,16.43h0Z' />
    </svg>
  ),
)

MegaphoneIcon.displayName = 'MegaphoneIcon'
