import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CardTextIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CardTextIcon = forwardRef<SVGSVGElement, CardTextIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CardText"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M6.291 21.048C6.05 19.836 6 18.256 6 16C6 13.744 6.05 12.164 6.291 10.952C6.507 9.842 6.824 9.375 7.155 9.099C7.539 8.779 8.249 8.458 9.752 8.255C11.283 8.046 13.274 8 16 8C18.725 8 20.717 8.046 22.248 8.255C23.751 8.458 24.461 8.779 24.845 9.099C25.176 9.375 25.493 9.842 25.709 10.952C25.95 12.164 26 13.744 26 16C26 18.256 25.95 19.836 25.709 21.048C25.493 22.158 25.176 22.625 24.845 22.901C24.461 23.221 23.751 23.542 22.248 23.744C20.717 23.954 18.725 24 16 24C13.274 24 11.283 23.954 9.752 23.744C8.249 23.542 7.539 23.221 7.155 22.901C6.824 22.625 6.507 22.158 6.291 21.048ZM16 26C5 26 4 25.167 4 16C4 6.833 5 6 16 6C27 6 28 6.833 28 16C28 25.167 27 26 16 26Z" />
            <path d="M9 12C9 11.448 9.448 11 10 11H22C22.552 11 23 11.448 23 12C23 12.552 22.552 13 22 13H10C9.448 13 9 12.552 9 12Z" />
            <path d="M9 16C9 15.448 9.448 15 10 15H22C22.552 15 23 15.448 23 16C23 16.552 22.552 17 22 17H10C9.448 17 9 16.552 9 16Z" />
            <path d="M9 20C9 19.448 9.41354 19 9.92308 19H18.0769C18.5865 19 19 19.448 19 20C19 20.552 18.5865 21 18.0769 21H9.92308C9.41354 21 9 20.552 9 20Z" />
          </>
    </svg>
  ),
)

CardTextIcon.displayName = 'CardTextIcon'
