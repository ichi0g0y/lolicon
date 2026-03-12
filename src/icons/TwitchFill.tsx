import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TwitchFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TwitchFillIcon = forwardRef<SVGSVGElement, TwitchFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TwitchFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M27.986 15.968c0 11-1 12-12 12s-12-1-12-12 1-12 12-12 12 1 12 12zM9.313 11.432L10.225 9h12.462v8.512l-3.648 3.647h-2.735l-1.823 1.825h-1.825v-1.825H9.313v-9.727zm12.158-1.217h-10.03v8.817h2.736v1.822L16 19.032h3.343l2.128-2.129v-6.688zM16 16.296h-1.216V12.65H16v3.647zm3.343 0h-1.216V12.65h1.216v3.647z" />
    </svg>
  ),
)

TwitchFillIcon.displayName = 'TwitchFillIcon'
