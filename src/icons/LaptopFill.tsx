import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface LaptopFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const LaptopFillIcon = forwardRef<SVGSVGElement, LaptopFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LaptopFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 7.75C15.2887 7.75 14.623 7.75745 14 7.77362C5.7919 7.98651 5 9.70856 5 15.75C5 19.0577 5.23738 21.0706 6.79932 22.25H5C4.448 22.25 4 22.698 4 23.25C4 23.802 4.448 24.25 5 24.25H27C27.552 24.25 28 23.802 28 23.25C28 22.698 27.552 22.25 27 22.25H25.2007C26.7626 21.0706 27 19.0577 27 15.75C27 9.25 26.0833 7.75 16 7.75Z" />
    </svg>
  ),
)

LaptopFillIcon.displayName = 'LaptopFillIcon'
