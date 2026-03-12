import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CreditCardExclamationIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CreditCardExclamationIcon = forwardRef<SVGSVGElement, CreditCardExclamationIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CreditCardExclamation"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6 16C6 18.256 6.05 19.836 6.291 21.048C6.507 22.158 6.824 22.625 7.155 22.901C7.539 23.221 8.249 23.542 9.752 23.744C11.283 23.954 13.274 24 16 24C18.3237 24 20.1145 23.9665 21.5408 23.8265C21.5139 24.0472 21.5 24.272 21.5 24.5C21.5 24.9562 21.5555 25.3993 21.6602 25.8232C20.1542 25.9638 18.2947 26 16 26C5 26 4 25.167 4 16C4 6.833 5 6 16 6C27 6 28 6.833 28 16C28 17.1533 27.9842 18.1747 27.9346 19.0791C27.6308 19.0271 27.3186 19 27 19C26.6355 19 26.2793 19.0355 25.9346 19.1031C25.9855 18.2325 26 17.2142 26 16C26 15.6509 25.9988 15.3179 25.9959 15H6.00412C6.0012 15.3179 6 15.6509 6 16ZM25.709 10.952L25.7184 11H6.28159L6.291 10.952C6.507 9.842 6.824 9.375 7.155 9.099C7.539 8.779 8.249 8.458 9.752 8.255C11.283 8.046 13.274 8 16 8C18.725 8 20.717 8.046 22.248 8.255C23.751 8.458 24.461 8.779 24.845 9.099C25.176 9.375 25.493 9.842 25.709 10.952ZM31.5 24.5C31.5 26.9853 29.4853 29 27 29C24.5147 29 22.5 26.9853 22.5 24.5C22.5 22.0147 24.5147 20 27 20C29.4853 20 31.5 22.0147 31.5 24.5ZM26 24.25C26 24.802 26.448 25.25 27 25.25C27.552 25.25 28 24.802 28 24.25V22.25C28 21.698 27.552 21.25 27 21.25C26.448 21.25 26 21.698 26 22.25V24.25ZM26 26.75C26 27.302 26.448 27.75 27 27.75C27.552 27.75 28 27.302 28 26.75C28 26.198 27.552 25.75 27 25.75C26.448 25.75 26 26.198 26 26.75Z" />
    </svg>
  ),
)

CreditCardExclamationIcon.displayName = 'CreditCardExclamationIcon'
