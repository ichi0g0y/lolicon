import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MagnetIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MagnetIcon = forwardRef<SVGSVGElement, MagnetIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Magnet"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g transform="matrix(0.088388,0.088388,-0.088388,0.088388,14.834313,-5.453849)">
        <path d="M200,40L161.6,40C152.823,40 145.6,47.223 145.6,56L145.6,144C145.6,152.777 136.777,160.8 128,160.8C119.223,160.8 110.4,152.777 110.4,144L110.4,56C110.4,47.223 103.177,40 94.4,40L56,40C47.223,40 40,47.223 40,56L40,144C40,192.275 79.725,232 128,232L128.67,232C176.82,231.64 216,191.71 216,143L216,56C216,47.223 208.777,40 200,40ZM200,56L200,87.2L161.6,87.2L161.6,56L200,56ZM94.4,56L94.4,87.2L56,87.2L56,56L94.4,56ZM128.55,216C128.367,216.001 128.183,216.002 128,216.002C88.502,216.002 56,183.5 56,144.002C56,144.001 56,103.2 56,103.2L94.4,103.2L94.4,144C94.4,161.555 110.445,176.8 128,176.8C145.555,176.8 161.6,161.555 161.6,144L161.6,103.2L200,103.2L200,143C200,183 168,215.71 128.55,216Z" fillRule="nonzero" />
      </g>
    </svg>
  ),
)

MagnetIcon.displayName = 'MagnetIcon'
