import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TwitchIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TwitchIcon = forwardRef<SVGSVGElement, TwitchIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Twitch"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z" />
            <path d="M10.2254 9L9.31343 11.432V21.159H12.6558V22.9839H14.4806L16.3036 21.159H19.0388L22.6866 17.5125V9H10.2254ZM11.4404 10.2152H21.471V16.9033L19.3429 19.0316H16L14.1775 20.854V19.0316H11.4404V10.2152ZM14.7841 16.2961H16V12.6486H14.7841V16.2961ZM18.1273 16.2961H19.3429V12.6486H18.1273V16.2961Z" />
          </>
    </svg>
  ),
)

TwitchIcon.displayName = 'TwitchIcon'
