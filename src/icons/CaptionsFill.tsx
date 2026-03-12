import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CaptionsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CaptionsFillIcon = forwardRef<SVGSVGElement, CaptionsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CaptionsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M28 16C28 22.5 27.042 24 16.5 24C15.983 24 15.49 23.996 15.018 23.989L15.016 23.99L10.555 26.964C9.89 27.407 9 26.93 9 26.131V23.418C9 23.416 8.998 23.414 8.996 23.413C5.439 22.51 5 20.401 5 16C5 9.5 5.958 8 16.5 8C27.042 8 28 9.5 28 16ZM9 13.5C8.448 13.5 8 13.948 8 14.5C8 15.052 8.448 15.5 9 15.5H23C23.552 15.5 24 15.052 24 14.5C24 13.948 23.552 13.5 23 13.5H9ZM8 17.5C8 16.948 8.41354 16.5 8.92308 16.5H17.0769C17.5865 16.5 18 16.948 18 17.5C18 18.052 17.5865 18.5 17.0769 18.5H8.92308C8.41354 18.5 8 18.052 8 17.5ZM19.9231 16.5C19.4135 16.5 19 16.948 19 17.5C19 18.052 19.4135 18.5 19.9231 18.5H23.0769C23.5865 18.5 24 18.052 24 17.5C24 16.948 23.5865 16.5 23.0769 16.5H19.9231Z" />
    </svg>
  ),
)

CaptionsFillIcon.displayName = 'CaptionsFillIcon'
