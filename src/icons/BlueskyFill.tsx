import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface BlueskyFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const BlueskyFillIcon = forwardRef<SVGSVGElement, BlueskyFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BlueskyFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 4C26 4 28 6 28 16C28 26 26 28 16 28C6 28 4 26 4 16C4 6 6 4 16 4ZM16 15.5864C15.2997 14.1379 13.3924 11.4387 11.6192 10.1075C10.3398 9.14691 8.26658 8.40368 8.26658 10.7687C8.26658 11.2409 8.53737 14.7363 8.6962 15.3039C9.2482 17.2768 11.26 17.78 13.0495 17.4754C9.92148 18.0077 9.12578 19.7712 10.8443 21.5346C14.1081 24.8837 15.5353 20.6945 15.9011 19.6209C15.9681 19.4241 15.9995 19.332 16 19.4103C16.0004 19.332 16.0318 19.4241 16.0988 19.6209C16.465 20.6951 17.8924 24.8832 21.1556 21.5346C22.8741 19.7712 22.0784 18.0078 18.9504 17.4754C20.7399 17.78 22.7516 17.2768 23.3037 15.3039C23.4625 14.7364 23.7333 11.241 23.7333 10.7687C23.7333 8.40368 21.6603 9.14691 20.3808 10.1075C18.6075 11.4387 16.7003 14.138 16 15.5864Z" />
    </svg>
  ),
)

BlueskyFillIcon.displayName = 'BlueskyFillIcon'
