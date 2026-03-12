import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TwitchNudeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TwitchNudeIcon = forwardRef<SVGSVGElement, TwitchNudeIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TwitchNude"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M10 4 5.714 8.286v15.429h5.143v4.286l4.286-4.286h3.428L26.286 16V4H10Zm14.572 11.143-3.428 3.428h-3.428l-3 3v-3h-3.857V5.715h13.715v9.429Z' />
                <path d='M20.286 8.715h1.715v5.143h-1.715zM15.572 8.715h1.715v5.143h-1.715z' />
              </g>
    </svg>
  ),
)

TwitchNudeIcon.displayName = 'TwitchNudeIcon'
