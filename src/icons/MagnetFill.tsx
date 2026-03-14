import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MagnetFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MagnetFillIcon = forwardRef<SVGSVGElement, MagnetFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MagnetFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g transform="matrix(0.088388,0.088388,-0.088388,0.088388,14.834313,-5.453849)">
        <path d="M200,40L161.6,40C152.823,40 145.6,47.223 145.6,56L145.6,144C145.6,152.777 136.777,160.8 128,160.8C119.223,160.8 110.4,152.777 110.4,144L110.4,56C110.4,47.223 103.177,40 94.4,40L56,40C47.223,40 40,47.223 40,56L40,144C40,192.275 79.725,232 128,232L128.67,232C176.82,231.64 216,191.71 216,143L216,56C216,47.223 208.777,40 200,40ZM200,56L200,87.2L161.6,87.2L161.6,56L200,56ZM94.4,56L94.4,87.2L56,87.2L56,56L94.4,56Z" fillRule="nonzero" />
      </g>
    </svg>
  ),
)

MagnetFillIcon.displayName = 'MagnetFillIcon'
