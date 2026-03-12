import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface EventLikeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const EventLikeIcon = forwardRef<SVGSVGElement, EventLikeIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EventLike"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16ZM24.336 24.336C25.425 23.247 26 21.1 26 16C26 13.8599 25.8987 12.24 25.7008 11H6.2992C6.10123 12.24 6 13.8601 6 16C6 21.1 6.575 23.247 7.664 24.336C8.753 25.425 10.9 26 16 26C21.1 26 23.247 25.425 24.336 24.336ZM11 8.00001C11.0001 7.44769 11.4477 7.00002 12.0001 6.99995H20C20.5523 6.99995 21 7.44773 21 8.00001C21 8.5523 20.5523 9 20 9H12C11.4477 9 11 8.55226 11 8.00001Z" />
            <path d="M19.2463 15.7958C18.597 15.1558 17.2985 14.8358 16 16.1158C14.7015 14.8358 13.403 15.1558 12.7537 15.7958C10.1567 18.3558 15.2035 21.7358 16 21.7358C16.7964 21.7358 21.8433 18.3558 19.2463 15.7958Z" />
          </>
    </svg>
  ),
)

EventLikeIcon.displayName = 'EventLikeIcon'
