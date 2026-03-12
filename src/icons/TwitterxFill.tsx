import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TwitterxFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TwitterxFillIcon = forwardRef<SVGSVGElement, TwitterxFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TwitterxFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M27.986 15.968C27.986 26.968 26.986 27.968 15.986 27.968C4.98602 27.968 3.98602 26.968 3.98602 15.968C3.98602 4.96799 4.98602 3.96799 15.986 3.96799C26.986 3.96799 27.986 4.96799 27.986 15.968ZM22.361 9.50699H20.1557L16.5217 13.661L13.3797 9.50699H8.82904L14.2664 16.617L9.11304 22.507H11.3197L15.297 17.9623L18.773 22.507H23.211L17.543 15.0137L22.361 9.50699ZM20.6037 21.187H19.3817L11.4044 10.7577H12.7157L20.6037 21.187Z" />
    </svg>
  ),
)

TwitterxFillIcon.displayName = 'TwitterxFillIcon'
