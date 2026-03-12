import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TimerIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TimerIcon = forwardRef<SVGSVGElement, TimerIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Timer"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M15 5C15 4.44772 15.4477 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 13.0457 5.06887 10.3385 6.83981 8.24781C7.19678 7.82639 7.82779 7.77415 8.2492 8.13111C8.67062 8.48808 8.72286 9.11909 8.3659 9.5405C6.88945 11.2835 6 13.5366 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.8147 22.0533 6.5511 17 6.04938V9C17 9.552 16.552 10 16 10C15.448 10 15 9.552 15 9V5ZM17.4142 14.5857C18.1952 15.3668 18.1952 16.6331 17.4142 17.4142C16.6331 18.1952 15.3668 18.1952 14.5858 17.4142C14.138 16.9664 11.7433 13.9708 9.78132 11.4959C9.22994 10.8004 10.0446 9.87674 10.8023 10.3389C13.5737 12.0295 16.9618 14.1334 17.4142 14.5857Z" />
    </svg>
  ),
)

TimerIcon.displayName = 'TimerIcon'
