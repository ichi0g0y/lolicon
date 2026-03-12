import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface NotificationFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const NotificationFillIcon = forwardRef<SVGSVGElement, NotificationFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NotificationFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M29 7C29 9.20914 27.2091 11 25 11C22.7909 11 21 9.20914 21 7C21 4.79086 22.7909 3 25 3C27.2091 3 29 4.79086 29 7Z" />
            <path d="M20.823 4.25078C19.4705 4.07039 17.876 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16C28 14.124 27.9296 12.5295 27.7492 11.177C26.9604 11.6972 26.0156 12 25 12C22.2386 12 20 9.76142 20 7C20 5.98443 20.3028 5.03957 20.823 4.25078ZM21.9308 4.43466C21.3498 5.1291 21 6.0237 21 7C21 9.20914 22.7909 11 25 11C25.9763 11 26.8709 10.6502 27.5653 10.0692C26.885 6.71702 25.283 5.11505 21.9308 4.43466Z" />
          </>
    </svg>
  ),
)

NotificationFillIcon.displayName = 'NotificationFillIcon'
