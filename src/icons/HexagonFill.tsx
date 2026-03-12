import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface HexagonFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const HexagonFillIcon = forwardRef<SVGSVGElement, HexagonFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HexagonFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M24.5021 22.3277L17.0021 26.6699C16.3822 27.0287 15.6178 27.0287 14.9979 26.6699L7.4979 22.3277C6.88026 21.9702 6.49997 21.3106 6.49997 20.5969V11.8523C6.49997 11.1661 6.85179 10.5278 7.43199 10.1614L14.932 5.42452C15.5844 5.01249 16.4156 5.01249 17.068 5.42452L24.568 10.1614C25.1482 10.5278 25.5 11.1661 25.5 11.8523V20.5969C25.5 21.3106 25.1197 21.9702 24.5021 22.3277Z" />
    </svg>
  ),
)

HexagonFillIcon.displayName = 'HexagonFillIcon'
