import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface RssIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const RssIcon = forwardRef<SVGSVGElement, RssIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rss"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M10 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path d="M8 9a1 1 0 0 1 1-1c8.284 0 15 6.716 15 15a1 1 0 1 1-2 0c0-7.18-5.82-13-13-13a1 1 0 0 1-1-1z" />
            <path d="M8 15a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1z" />
          </>
    </svg>
  ),
)

RssIcon.displayName = 'RssIcon'
