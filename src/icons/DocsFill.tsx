import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface DocsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const DocsFillIcon = forwardRef<SVGSVGElement, DocsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DocsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12zm-15.5-6a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2h-11zm-1 6a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2h-11a1 1 0 0 1-1-1zm1 4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8z" />
    </svg>
  ),
)

DocsFillIcon.displayName = 'DocsFillIcon'
