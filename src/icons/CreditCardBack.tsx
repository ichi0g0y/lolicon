import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CreditCardBackIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CreditCardBackIcon = forwardRef<SVGSVGElement, CreditCardBackIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CreditCardBack"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.291 21.048C6.05 19.836 6 18.256 6 16C6 15.6509 6.0012 15.3179 6.00412 15H25.9959C25.9988 15.3179 26 15.6509 26 16C26 18.256 25.95 19.836 25.709 21.048C25.493 22.158 25.176 22.625 24.845 22.901C24.461 23.221 23.751 23.542 22.248 23.744C20.717 23.954 18.725 24 16 24C13.274 24 11.283 23.954 9.752 23.744C8.249 23.542 7.539 23.221 7.155 22.901C6.824 22.625 6.507 22.158 6.291 21.048ZM25.709 10.952L25.7184 11H6.28159L6.291 10.952C6.507 9.842 6.824 9.375 7.155 9.099C7.539 8.779 8.249 8.458 9.752 8.255C11.283 8.046 13.274 8 16 8C18.725 8 20.717 8.046 22.248 8.255C23.751 8.458 24.461 8.779 24.845 9.099C25.176 9.375 25.493 9.842 25.709 10.952ZM16 26C5 26 4 25.167 4 16C4 6.833 5 6 16 6C27 6 28 6.833 28 16C28 25.167 27 26 16 26ZM9 17C8.448 17 8 17.448 8 18C8 18.552 8.448 19 9 19H23C23.552 19 24 18.552 24 18C24 17.448 23.552 17 23 17H9ZM8 21C8 20.448 8.41354 20 8.92308 20H17.0769C17.5865 20 18 20.448 18 21C18 21.552 17.5865 22 17.0769 22H8.92308C8.41354 22 8 21.552 8 21ZM19.9231 20C19.4135 20 19 20.448 19 21C19 21.552 19.4135 22 19.9231 22H23.0769C23.5865 22 24 21.552 24 21C24 20.448 23.5865 20 23.0769 20H19.9231Z" />
    </svg>
  ),
)

CreditCardBackIcon.displayName = 'CreditCardBackIcon'
