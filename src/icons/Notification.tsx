import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const NotificationIcon = forwardRef<SVGSVGElement, NotificationIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Notification"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M20.823 4.25078C19.4705 4.07039 17.876 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16C28 14.124 27.9296 12.5295 27.7492 11.177C27.1783 11.5535 26.5256 11.8161 25.8236 11.9325C25.9405 13.0248 26 14.3596 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6C17.6403 6 18.9751 6.05958 20.0675 6.17665C20.1838 5.4745 20.4464 4.82175 20.823 4.25078ZM27.5653 10.0692C26.885 6.71702 25.283 5.11505 21.9308 4.43466C21.49 4.96153 21.1823 5.60362 21.0594 6.30919C22.7383 6.58436 23.7113 7.04027 24.336 7.665C24.9607 8.28968 25.4162 9.26217 25.6911 10.9405C26.3966 10.8176 27.0386 10.51 27.5653 10.0692Z" />
            <circle cx="25" cy="7" r="4" />
          </>
    </svg>
  ),
)

NotificationIcon.displayName = 'NotificationIcon'
