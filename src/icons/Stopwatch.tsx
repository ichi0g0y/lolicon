import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface StopwatchIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const StopwatchIcon = forwardRef<SVGSVGElement, StopwatchIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stopwatch"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.449 3.0384C17.742 3.0754 18.019 2.8624 17.96 2.5734C17.776 1.6694 16.965 0.957397 16 0.957397C15.034 0.957397 14.224 1.6694 14.04 2.5734C13.981 2.8624 14.258 3.0754 14.551 3.0384C15.506 2.9164 16.494 2.9164 17.449 3.0384ZM26 16C26 21.523 21.523 26 16 26C10.477 26 6 21.523 6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16ZM28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16ZM17 14.2676V9C17 8.448 16.552 8 16 8C15.448 8 15 8.448 15 9V14.2676C14.4022 14.6134 14 15.2597 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 15.2597 17.5978 14.6134 17 14.2676ZM27.1544 7.9628C26.9917 8.20888 26.6452 8.16362 26.4642 7.93028C25.8752 7.16872 25.1766 6.4701 24.415 5.88108C24.1817 5.70006 24.1364 5.35358 24.3825 5.19095C25.1518 4.68183 26.2281 4.75112 26.9111 5.43419C27.5935 6.11655 27.6635 7.19347 27.1544 7.9628Z" />
    </svg>
  ),
)

StopwatchIcon.displayName = 'StopwatchIcon'
