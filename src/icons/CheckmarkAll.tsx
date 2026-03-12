import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CheckmarkAllIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CheckmarkAllIcon = forwardRef<SVGSVGElement, CheckmarkAllIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CheckmarkAll"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M15.6465 17.8535L16 18.2071L16.3536 17.8535L26.8966 7.31054C27.0913 7.11581 27.4087 7.11581 27.6035 7.31054L27.9395 7.64654C28.1342 7.84128 28.1342 8.1587 27.9395 8.35344L16.3535 19.9394C16.1587 20.1342 15.8413 20.1342 15.6466 19.9394L11.0606 15.3534C10.8658 15.1587 10.8658 14.8413 11.0606 14.6465L11.3966 14.3105C11.5913 14.1158 11.9087 14.1158 12.1035 14.3105L15.6465 17.8535ZM5.44173 14.6465L5.09182 14.2966L5.44173 14.6465L5.77773 14.3105C5.97247 14.1158 6.28989 14.1158 6.48462 14.3105L9.22071 17.0466C9.24423 17.0718 9.26826 17.0967 9.29278 17.1212L11.4228 19.2512L10.7346 19.9394C10.5399 20.1342 10.2225 20.1342 10.0277 19.9394L5.44173 15.3534C5.24699 15.1587 5.24699 14.8413 5.44173 14.6465ZM22.3206 7.64654C22.5051 7.83107 22.5149 8.12629 22.3494 8.32212L16 14.6716L14.9584 13.6299L21.2777 7.31054C21.4725 7.11581 21.7899 7.11581 21.9846 7.31054L22.3206 7.64654Z" />
    </svg>
  ),
)

CheckmarkAllIcon.displayName = 'CheckmarkAllIcon'
