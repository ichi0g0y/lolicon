import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MoreVerticalIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MoreVerticalIcon = forwardRef<SVGSVGElement, MoreVerticalIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MoreVertical"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d='M18,15.95c.03,1.1-.85,2.02-1.95,2.05-1.1.03-2.02-.85-2.05-1.95,0-.03,0-.06,0-.09.02-1.1.94-1.98,2.04-1.96,1.07.02,1.93.88,1.96,1.95ZM18,21.95c.03,1.1-.85,2.02-1.95,2.05-1.1.03-2.02-.85-2.05-1.95,0-.03,0-.06,0-.09.02-1.1.94-1.98,2.04-1.96,1.07.02,1.93.88,1.96,1.95ZM18,9.95c.03,1.1-.85,2.02-1.95,2.05-1.1.03-2.02-.85-2.05-1.95,0-.03,0-.06,0-.09.02-1.1.94-1.98,2.04-1.96,1.07.02,1.93.88,1.96,1.95Z' />
    </svg>
  ),
)

MoreVerticalIcon.displayName = 'MoreVerticalIcon'
