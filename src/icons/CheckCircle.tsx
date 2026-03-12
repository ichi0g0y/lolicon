import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface CheckCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const CheckCircleIcon = forwardRef<SVGSVGElement, CheckCircleIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CheckCircle"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26ZM16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28ZM10.2925 18.0425C9.9025 17.6525 9.9025 17.0185 10.2925 16.6285L10.6285 16.2925C11.0185 15.9025 11.6525 15.9025 12.0425 16.2925L14.5855 18.8355L21.1285 12.2925C21.5185 11.9025 22.1525 11.9025 22.5425 12.2925L22.8785 12.6285C23.2685 13.0185 23.2685 13.6525 22.8785 14.0425L15.2925 21.6285C14.9025 22.0185 14.2685 22.0185 13.8785 21.6285L10.2925 18.0425Z" />
    </svg>
  ),
)

CheckCircleIcon.displayName = 'CheckCircleIcon'
