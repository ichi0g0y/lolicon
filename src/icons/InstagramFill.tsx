import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface InstagramFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const InstagramFillIcon = forwardRef<SVGSVGElement, InstagramFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="InstagramFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M11.9995 16C11.9995 18.2095 13.7905 20.0005 16 20.0005C18.2095 20.0005 20.0005 18.2095 20.0005 16C20.0005 13.7905 18.2095 11.9995 16 11.9995C13.7905 11.9995 11.9995 13.7905 11.9995 16Z" />
            <path d="M27.9999 16C27.9999 6 25.9999 4 15.9999 4C5.99988 4 3.99988 6 3.99988 16C3.99988 26 5.99988 28 15.9999 28C25.9999 28 27.9999 26 27.9999 16ZM9.83803 16C9.83803 12.598 12.595 9.838 16 9.838C19.402 9.838 22.162 12.595 22.162 16C22.162 19.402 19.405 22.162 16 22.162C12.598 22.162 9.83803 19.405 9.83803 16ZM22.405 11.035C23.2 11.035 23.845 10.39 23.845 9.595C23.845 8.8 23.2 8.155 22.405 8.155C21.61 8.155 20.965 8.8 20.965 9.595C20.965 10.39 21.61 11.035 22.405 11.035Z" />
          </>
    </svg>
  ),
)

InstagramFillIcon.displayName = 'InstagramFillIcon'
