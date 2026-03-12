import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MoonIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MoonIcon = forwardRef<SVGSVGElement, MoonIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Moon"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M22.5317 23.4697C22.5313 23.4697 22.5308 23.4697 22.5303 23.4697C14.7983 23.4697 8.53027 17.2017 8.53027 9.46974C8.53027 9.46925 8.53027 9.46876 8.53027 9.46827C7.2733 11.1407 6.53027 13.2183 6.53027 15.4697C6.53027 20.9926 11.0074 25.4697 16.5303 25.4697C18.7817 25.4697 20.8593 24.7267 22.5317 23.4697ZM24.9529 21.2251C25.8563 21.0399 26.6747 21.9485 26.1197 22.6849C23.9298 25.591 20.4494 27.4697 16.5303 27.4697C9.90286 27.4697 4.53027 22.0972 4.53027 15.4697C4.53027 11.5506 6.40906 8.07026 9.3151 5.88028C10.0515 5.32532 10.9601 6.14376 10.7749 7.04709C10.6145 7.82957 10.5303 8.63981 10.5303 9.46974C10.5303 16.0972 15.9029 21.4697 22.5303 21.4697C23.3602 21.4697 24.1704 21.3855 24.9529 21.2251Z" />
    </svg>
  ),
)

MoonIcon.displayName = 'MoonIcon'
