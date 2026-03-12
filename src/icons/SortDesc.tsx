import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface SortDescIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const SortDescIcon = forwardRef<SVGSVGElement, SortDescIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SortDesc"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M17.85,20h6.65c.6,0,1,.4,1,1s-.4,1-1,1h-6.65c-.6,0-1-.4-1-1s.4-1,1-1Z' />
                <path d='M17.85,15h6.65c.6,0,1,.4,1,1s-.4,1-1,1h-6.65c-.6,0-1-.4-1-1s.4-1,1-1Z' />
                <path d='M17.75,10h1.7c.5,0,.9.4.9,1s-.4,1-.9,1h-1.7c-.5,0-.9-.4-.9-1s.4-1,.9-1Z' />
                <path d='M15.2,19.7c.4-.4.4-1,0-1.4s-1-.4-1.4,0l-1.3,1.3v-9.6c0-.6-.4-1-1-1s-1,.4-1,1v9.6l-1.3-1.3c-.4-.4-1-.4-1.4,0-.4.4-.4,1,0,1.4l3,3c.4.4,1,.4,1.4,0l3-3Z' />
              </g>
    </svg>
  ),
)

SortDescIcon.displayName = 'SortDescIcon'
