import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MehIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MehIcon = forwardRef<SVGSVGElement, MehIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Meh"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M26 15.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-17.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM23 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M11 20c0-.552.414-1 .923-1h8.154c.51 0 .923.448.923 1s-.413 1-.923 1h-8.154c-.51 0-.923-.448-.923-1z" />
          </>
    </svg>
  ),
)

MehIcon.displayName = 'MehIcon'
