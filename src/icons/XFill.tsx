import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface XFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const XFillIcon = forwardRef<SVGSVGElement, XFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="XFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <polygon points='16.12 14.96 12.88 10.33 11.15 10.33 15.17 16.07 15.67 16.79 15.67 16.79 19.11 21.71 20.84 21.71 16.63 15.69 16.12 14.96' />
                <path d='M16,4c-11,0-12,1-12,12s1,12,12,12,12-1,12-12-1-12-12-12ZM18.58,22.52l-3.48-5.06-4.35,5.06h-1.13l4.98-5.79-4.98-7.25h3.8l3.29,4.79,4.12-4.79h1.13l-4.75,5.52h0l5.16,7.52h-3.8Z' />
              </g>
    </svg>
  ),
)

XFillIcon.displayName = 'XFillIcon'
