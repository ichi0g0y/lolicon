import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface EventMoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const EventMoveIcon = forwardRef<SVGSVGElement, EventMoveIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EventMove"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16ZM24.336 24.336C25.425 23.247 26 21.1 26 16C26 13.8599 25.8987 12.24 25.7008 11H6.2992C6.10123 12.24 6 13.8601 6 16C6 21.1 6.575 23.247 7.664 24.336C8.753 25.425 10.9 26 16 26C21.1 26 23.247 25.425 24.336 24.336ZM11 8.00001C11.0001 7.44769 11.4477 7.00002 12.0001 6.99995H20C20.5523 6.99995 21 7.44773 21 8.00001C21 8.5523 20.5523 9 20 9H12C11.4477 9 11 8.55226 11 8.00001Z" />
            <path d="M20.7071 17.7929L17.7071 14.7929C17.3166 14.4024 16.6834 14.4024 16.2929 14.7929C15.9024 15.1834 15.9024 15.8166 16.2929 16.2071L17.5858 17.5H12C11.4477 17.5 11 17.9477 11 18.5C11 19.0523 11.4477 19.5 12 19.5H17.5858L16.2929 20.7929C15.9024 21.1834 15.9024 21.8166 16.2929 22.2071C16.6834 22.5976 17.3166 22.5976 17.7071 22.2071L20.7071 19.2071C21.0976 18.8166 21.0976 18.1834 20.7071 17.7929Z" />
          </>
    </svg>
  ),
)

EventMoveIcon.displayName = 'EventMoveIcon'
