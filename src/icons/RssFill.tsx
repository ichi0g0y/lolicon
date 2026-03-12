import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface RssFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const RssFillIcon = forwardRef<SVGSVGElement, RssFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RssFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M27.986 15.968C27.986 26.968 26.986 27.968 15.986 27.968C4.98602 27.968 3.98602 26.968 3.98602 15.968C3.98602 4.96802 4.98602 3.96802 15.986 3.96802C26.986 3.96802 27.986 4.96802 27.986 15.968ZM12 22C12 23.104 11.1053 24 10 24C8.89467 24 8 23.104 8 22C8 20.896 8.89467 20 10 20C11.1053 20 12 20.896 12 22ZM8 9.00003C8 8.44775 8.44772 8.00003 9 8.00003C17.2843 8.00003 24 14.7158 24 23C24 23.5523 23.5523 24 23 24C22.4477 24 22 23.5523 22 23C22 15.8203 16.1797 10 9 10C8.44772 10 8 9.55232 8 9.00003ZM9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16C12.866 16 16 19.134 16 23C16 23.5523 16.4477 24 17 24C17.5523 24 18 23.5523 18 23C18 18.0295 13.9706 14 9 14Z" />
    </svg>
  ),
)

RssFillIcon.displayName = 'RssFillIcon'
