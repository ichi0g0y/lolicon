import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PieChartFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PieChartFillIcon = forwardRef<SVGSVGElement, PieChartFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PieChartFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M15 15.5046L15 15.5V4.04004C12.9525 4.20924 10.9213 4.90694 9.11709 6.17026C3.83667 9.86765 2.44415 17.0489 5.87049 22.4342L15 15.5046ZM7.07801 24.0267C11.0741 28.4796 17.8586 29.348 22.8829 25.8299C25.9192 23.7039 27.67 20.426 27.9584 17H16.3354L7.07801 24.0267ZM27.96 15C27.7908 12.9525 27.0931 10.9214 25.8298 9.11717C23.7038 6.08092 20.426 4.33012 17 4.04174V15H27.96Z" />
    </svg>
  ),
)

PieChartFillIcon.displayName = 'PieChartFillIcon'
