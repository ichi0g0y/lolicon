import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface HexagonIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const HexagonIcon = forwardRef<SVGSVGElement, HexagonIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hexagon"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M14.398 4.57901C15.3766 3.96097 16.6234 3.96097 17.602 4.57901L25.102 9.31586C25.9723 9.86551 26.5 10.823 26.5 11.8523V20.5969C26.5 21.6674 25.9296 22.6568 25.0031 23.1932L17.5031 27.5353C16.5733 28.0736 15.4267 28.0736 14.4969 27.5353L6.99686 23.1932C6.07041 22.6568 5.49997 21.6674 5.49997 20.5969V11.8523C5.49997 10.823 6.0277 9.86551 6.89799 9.31585L14.398 4.57901ZM16.534 6.26999C16.2078 6.06398 15.7922 6.06397 15.466 6.26999L7.96598 11.0068C7.67588 11.1901 7.49997 11.5092 7.49997 11.8523V20.5969C7.49997 20.9537 7.69012 21.2835 7.99894 21.4623L15.499 25.8044C15.8089 25.9838 16.1911 25.9838 16.501 25.8044L24.001 21.4623C24.3098 21.2835 24.5 20.9537 24.5 20.5969V11.8523C24.5 11.5092 24.3241 11.1901 24.034 11.0068L16.534 6.26999Z" />
    </svg>
  ),
)

HexagonIcon.displayName = 'HexagonIcon'
