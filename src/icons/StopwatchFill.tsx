import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface StopwatchFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const StopwatchFillIcon = forwardRef<SVGSVGElement, StopwatchFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="StopwatchFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.449 3.0384C17.742 3.0754 18.019 2.8624 17.96 2.5734C17.776 1.6694 16.965 0.957397 16 0.957397C15.034 0.957397 14.224 1.6694 14.04 2.5734C13.981 2.8624 14.258 3.0754 14.551 3.0384C15.506 2.9164 16.494 2.9164 17.449 3.0384ZM26.4642 7.93028C26.6452 8.16362 26.9917 8.20888 27.1544 7.9628C27.6635 7.19347 27.5935 6.11655 26.9111 5.43419C26.2281 4.75112 25.1518 4.68183 24.3825 5.19095C24.1364 5.35358 24.1817 5.70006 24.415 5.88108C25.1766 6.4701 25.8752 7.16872 26.4642 7.93028ZM28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16ZM15 14.2676V9C15 8.448 15.448 8 16 8C16.552 8 17 8.448 17 9V14.2676C17.5978 14.6134 18 15.2597 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 15.2597 14.4022 14.6134 15 14.2676Z" />
    </svg>
  ),
)

StopwatchFillIcon.displayName = 'StopwatchFillIcon'
