import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface LightbulbLowFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const LightbulbLowFillIcon = forwardRef<SVGSVGElement, LightbulbLowFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LightbulbLowFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M20.273 19.79C19.57 20.544 19 21.467 19 22.498C19 23.327 18.328 24 17.498 24H14.548C13.693 24 13 23.307 13 22.452C13 21.443 12.475 20.53 11.759 19.819C10.464 18.533 10 17.115 10 15.176C10 11.765 12.686 9 16 9C19.314 9 22 11.765 22 15.176C22 17.017 21.372 18.609 20.273 19.79ZM16.764 25C17.522 25 17.541 25.126 16.81 25.327L13.36 26.276C13.178 26.325 13 26.188 13 26C13 25.782 13.07 25.58 13.189 25.415C13.278 25.292 13.421 25.225 13.567 25.185L14.132 25.034C14.216 25.011 14.303 25 14.39 25H16.764ZM13.002 27.534C13.029 27.92 13.476 28.048 13.849 27.948L18.452 26.714C18.775 26.628 19 26.335 19 26C19 25.735 18.713 25.609 18.457 25.678L13.314 27.056C13.129 27.105 13 27.273 13 27.465C13 27.488 13.001 27.511 13.002 27.534ZM16.517 29C16.605 29 16.692 28.988 16.776 28.966L17.913 28.661C18.018 28.633 18.118 28.588 18.209 28.527L18.555 28.297C18.833 28.111 19 27.799 19 27.465C19 27.399 18.938 27.351 18.874 27.368L14.287 28.598C14.178 28.627 14.155 28.77 14.248 28.832C14.412 28.942 14.605 29 14.803 29H16.517Z" />
            <circle cx="9.82578" cy="8.82932" r="1" />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(-1 0 0 1 23.4045 7.83167)"
            />
            <circle cx="15.999" cy="6.00407" r="1" />
            <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 6 16)" />
            <circle
              cx="25.0023"
              cy="15.0023"
              r="1"
              transform="rotate(180 25.0023 15.0023)"
            />
          </>
    </svg>
  ),
)

LightbulbLowFillIcon.displayName = 'LightbulbLowFillIcon'
