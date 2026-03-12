import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ThermometerLowIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ThermometerLowIcon = forwardRef<SVGSVGElement, ThermometerLowIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ThermometerLow"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 6C12 3.79086 13.7909 2 16 2C18.2091 2 20 3.79086 20 6V18.6338C20 19.2027 20.2564 19.7333 20.6197 20.1711C21.4817 21.21 22 22.5445 22 24C22 27.3137 19.3137 30 16 30C12.6863 30 10 27.3137 10 24C10 22.5445 10.5183 21.21 11.3803 20.1711C11.7436 19.7333 12 19.2027 12 18.6338V6ZM18 6V18.3414V19.3815C18 20.0955 18.411 20.7296 18.9024 21.2475C19.5827 21.9646 20 22.9335 20 24C20 26.2091 18.2091 28 16 28C13.7909 28 12 26.2091 12 24C12 22.9335 12.4173 21.9646 13.0976 21.2475C13.589 20.7296 14 20.0955 14 19.3815L14 18.3414V6C14 4.89543 14.8954 4 16 4C17.1046 4 18 4.89543 18 6ZM19 24C19 25.6569 17.6569 27 16 27C14.3431 27 13 25.6569 13 24C13 22.6938 13.8348 21.5825 15 21.1707V18C15 17.448 15.448 17 16 17C16.552 17 17 17.448 17 18V21.1707C18.1652 21.5825 19 22.6938 19 24Z" />
    </svg>
  ),
)

ThermometerLowIcon.displayName = 'ThermometerLowIcon'
