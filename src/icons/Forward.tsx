import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ForwardIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ForwardIcon = forwardRef<SVGSVGElement, ForwardIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Forward"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M20.1098 17.7077C19.6855 18.0613 19.6282 18.6919 19.9818 19.1161C20.3354 19.5404 20.9659 19.5977 21.3902 19.2442L21.3914 19.2431C23 18.226 24 17.226 25.5914 15.2794C25.8096 14.9682 26 14.6161 26 14.2259C26 13.8358 25.8096 13.4837 25.5914 13.1725C24 11.226 23 10.226 21.3906 9.20804C20.9238 8.91283 20.3354 8.91149 19.9818 9.33576C19.6282 9.76003 19.6855 10.3906 20.1098 10.7442L20.2716 10.879C21.4196 11.8363 22.1091 12.4113 22.9265 13.226H10C7.2386 13.226 5 15.4645 5 18.226C5 20.9874 7.2386 23.226 10 23.226H14C14.5523 23.226 15 22.7783 15 22.226C15 21.6737 14.5523 21.226 14 21.226H10C8.3431 21.226 7 19.8828 7 18.226C7 16.5691 8.3431 15.226 10 15.226H22.9251C22.1208 16.0257 21.4356 16.5987 20.3545 17.5029L20.1098 17.7077Z" />
    </svg>
  ),
)

ForwardIcon.displayName = 'ForwardIcon'
