import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TabletFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TabletFillIcon = forwardRef<SVGSVGElement, TabletFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TabletFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.45386 5.49977C6.45315 6.05202 6.90146 6.50033 7.45371 6.49962L22.863 6.49962C23.7016 6.49962 24.5325 6.34335 25.3131 6.0393L25.3195 6.03717C26.0315 5.75928 26.0336 4.75307 25.3237 4.47164C24.536 4.16051 23.6967 4 22.8495 4L7.45371 4.00071C6.90146 4 6.45386 4.4476 6.45386 5.00056L6.45386 5.49977ZM4 16.5C4 25.667 5 26.5 16 26.5C27 26.5 28 25.667 28 16.5C28 7.333 27 6.5 16 6.5C5 6.5 4 7.333 4 16.5Z" />
    </svg>
  ),
)

TabletFillIcon.displayName = 'TabletFillIcon'
