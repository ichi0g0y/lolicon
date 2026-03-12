import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PackageIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PackageIcon = forwardRef<SVGSVGElement, PackageIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Package"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.602 4.57901C16.6234 3.96097 15.3766 3.96097 14.398 4.57901L6.89799 9.31585C6.0277 9.86551 5.49997 10.823 5.49997 11.8523V20.5969C5.49997 21.6674 6.07041 22.6568 6.99686 23.1932L14.4969 27.5353C15.4267 28.0736 16.5733 28.0736 17.5031 27.5353L25.0031 23.1932C25.9296 22.6568 26.5 21.6674 26.5 20.5969V11.8523C26.5 10.823 25.9723 9.86551 25.102 9.31586L17.602 4.57901ZM15.466 6.26999C15.7922 6.06397 16.2078 6.06398 16.534 6.26999L23.5364 10.6926L16 14.8575L8.46355 10.6926L15.466 6.26999ZM7.49997 12.4452V20.5969C7.49997 20.9537 7.69012 21.2835 7.99894 21.4623L15 25.5155V16.5899L7.49997 12.4452ZM17 25.5155L24.001 21.4623C24.3098 21.2835 24.5 20.9537 24.5 20.5969V12.4452L17 16.5899V25.5155Z" />
    </svg>
  ),
)

PackageIcon.displayName = 'PackageIcon'
