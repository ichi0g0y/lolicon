import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface EventAnalyticsIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const EventAnalyticsIcon = forwardRef<SVGSVGElement, EventAnalyticsIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EventAnalytics"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16ZM24.336 24.336C25.425 23.247 26 21.1 26 16C26 13.8599 25.8987 12.24 25.7008 11H16H6.2992C6.10123 12.24 6 13.8601 6 16C6 21.1 6.575 23.247 7.664 24.336C8.753 25.425 10.9 26 16 26C21.1 26 23.247 25.425 24.336 24.336ZM11 8.00001C11.0001 7.44769 11.4477 7.00002 12.0001 6.99995H20C20.5523 6.99995 21 7.44773 21 8.00001C21 8.5523 20.5523 9 20 9H12C11.4477 9 11 8.55226 11 8.00001Z" />
            <path d="M12 23C11.448 23 11 22.552 11 22L11 18C11 17.448 11.448 17 12 17C12.552 17 13 17.448 13 18L13 22C13 22.552 12.552 23 12 23Z" />
            <path d="M16 23C15.448 23 15 22.552 15 22L15 15C15 14.448 15.448 14 16 14C16.552 14 17 14.448 17 15L17 22C17 22.552 16.552 23 16 23Z" />
            <path d="M20 23C19.448 23 19 22.552 19 22L19 20C19 19.448 19.448 19 20 19C20.552 19 21 19.448 21 20L21 22C21 22.552 20.552 23 20 23Z" />
          </>
    </svg>
  ),
)

EventAnalyticsIcon.displayName = 'EventAnalyticsIcon'
