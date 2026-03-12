import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CapsuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CapsuleIcon = forwardRef<SVGSVGElement, CapsuleIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Capsule"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13.1716 13.1716L17.4142 8.92893C18.9763 7.36683 21.509 7.36683 23.0711 8.92893C24.6332 10.491 24.6332 13.0237 23.0711 14.5858L18.8284 18.8284L13.1716 13.1716ZM11.7574 11.7574L16 7.51471C18.3432 5.17157 22.1422 5.17157 24.4853 7.51471C26.8284 9.85786 26.8284 13.6568 24.4853 16L16 24.4853C14.8284 25.6569 13.2929 26.2426 11.7574 26.2426C10.7736 26.2426 9.78976 26.0022 8.90168 25.5213C8.40361 25.2516 7.93565 24.9062 7.51468 24.4853C5.17154 22.1421 5.17154 18.3431 7.51468 16L11.7573 11.7573L11.7574 11.7574Z" />
    </svg>
  ),
)

CapsuleIcon.displayName = 'CapsuleIcon'
