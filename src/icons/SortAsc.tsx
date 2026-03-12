import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface SortAscIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const SortAscIcon = forwardRef<SVGSVGElement, SortAscIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SortAsc"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M16.85,11c0-.55.45-1,1-1h6.65c.55,0,1,.45,1,1s-.45,1-1,1h-6.65c-.55,0-1-.45-1-1Z' />
                <path d='M16.85,16c0-.55.45-1,1-1h6.65c.55,0,1,.45,1,1s-.45,1-1,1h-6.65c-.55,0-1-.45-1-1Z' />
                <path d='M16.85,21c0-.55.41-1,.92-1h1.65c.51,0,.92.45.92,1s-.41,1-.92,1h-1.65c-.51,0-.92-.45-.92-1Z' />
                <path d='M12.21,9.29c-.39-.39-1.02-.39-1.41,0l-3,3c-.39.39-.39,1.02,0,1.41s1.02.39,1.41,0l1.29-1.29v9.58c0,.55.45,1,1,1s1-.45,1-1v-9.59l1.29,1.29c.39.39,1.02.39,1.41,0,.39-.39.39-1.02,0-1.41l-3-3Z' />
              </g>
    </svg>
  ),
)

SortAscIcon.displayName = 'SortAscIcon'
