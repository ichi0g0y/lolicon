import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ImportantFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ImportantFillIcon = forwardRef<SVGSVGElement, ImportantFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ImportantFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-12 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2-11.5c0 2.5-.5 7.5-2 7.5s-2-5-2-7.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5z" />
          </>
    </svg>
  ),
)

ImportantFillIcon.displayName = 'ImportantFillIcon'
