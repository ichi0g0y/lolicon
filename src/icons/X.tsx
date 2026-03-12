import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface XIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const XIcon = forwardRef<SVGSVGElement, XIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="X"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M16,6c5.1,0,7.25.58,8.34,1.66,1.09,1.09,1.66,3.23,1.66,8.34s-.58,7.25-1.66,8.34c-1.09,1.09-3.24,1.66-8.34,1.66s-7.25-.58-8.34-1.66c-1.09-1.09-1.66-3.24-1.66-8.34s.57-7.25,1.66-8.34c1.09-1.09,3.24-1.66,8.34-1.66ZM28,16c0-10-2-12-12-12s-12,2-12,12,2,12,12,12,12-2,12-12Z' />
                <path d='M17.21,15l4.75-5.52h-1.13l-4.12,4.79-3.29-4.79h-3.8l4.98,7.25-4.98,5.79h1.13l4.35-5.06,3.48,5.06h3.8l-5.16-7.52h0ZM15.67,16.79l-.5-.72-4.01-5.74h1.73l3.24,4.63.5.72,4.21,6.02h-1.73l-3.44-4.92h0Z' />
              </g>
    </svg>
  ),
)

XIcon.displayName = 'XIcon'
