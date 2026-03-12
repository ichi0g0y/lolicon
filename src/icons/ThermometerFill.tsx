import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ThermometerFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ThermometerFillIcon = forwardRef<SVGSVGElement, ThermometerFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ThermometerFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 2C13.7909 2 12 3.79086 12 6V18.6338C12 19.2027 11.7436 19.7333 11.3803 20.1711C10.5183 21.21 10 22.5445 10 24C10 27.3137 12.6863 30 16 30C19.3137 30 22 27.3137 22 24C22 22.5445 21.4817 21.21 20.6197 20.1711C20.2564 19.7333 20 19.2027 20 18.6338V6C20 3.79086 18.2091 2 16 2ZM18 18.3414V6C18 4.89543 17.1046 4 16 4C14.8954 4 14 4.89543 14 6V18.3414L14 19.3815C14 20.0955 13.589 20.7296 13.0976 21.2475C12.4173 21.9646 12 22.9335 12 24C12 26.2091 13.7909 28 16 28C18.2091 28 20 26.2091 20 24C20 22.9335 19.5827 21.9646 18.9024 21.2475C18.411 20.7296 18 20.0955 18 19.3815V18.3414ZM15 19.7564C15 20.604 14.4086 21.3195 13.8247 21.934C13.3136 22.472 13 23.1994 13 24C13 25.6569 14.3431 27 16 27C17.6569 27 19 25.6569 19 24C19 23.1994 18.6864 22.472 18.1753 21.934C17.5914 21.3195 17 20.604 17 19.7564V6C17 5.448 16.552 5 16 5C15.448 5 15 5.448 15 6V19.7564Z" />
    </svg>
  ),
)

ThermometerFillIcon.displayName = 'ThermometerFillIcon'
