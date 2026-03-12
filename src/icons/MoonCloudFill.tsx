import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MoonCloudFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MoonCloudFillIcon = forwardRef<SVGSVGElement, MoonCloudFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MoonCloudFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M26 17.5H15.765C13.78 15.826 12.4244 13.4295 12.1035 10.716C12.4482 9.43935 13.6144 8.5 15 8.5C15.4651 8.5 15.9055 8.6058 16.2983 8.7947C16.9955 6.87292 18.8374 5.5 21 5.5C23.4194 5.5 25.4374 7.21837 25.9002 9.5012C28.1171 9.4472 30 11.2809 30 13.5C30 15.7091 28.2091 17.5 26 17.5ZM26.1197 22.6849C26.6747 21.9485 25.8563 21.0399 24.9529 21.2251C24.1704 21.3855 23.3602 21.4697 22.5303 21.4697C15.9029 21.4697 10.5303 16.0972 10.5303 9.46974C10.5303 8.63981 10.6145 7.82957 10.7749 7.04709C10.9601 6.14376 10.0515 5.32532 9.3151 5.88028C6.40906 8.07026 4.53027 11.5506 4.53027 15.4697C4.53027 22.0972 9.90286 27.4697 16.5303 27.4697C20.4494 27.4697 23.9298 25.591 26.1197 22.6849Z" />
    </svg>
  ),
)

MoonCloudFillIcon.displayName = 'MoonCloudFillIcon'
