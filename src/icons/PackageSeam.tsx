import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PackageSeamIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PackageSeamIcon = forwardRef<SVGSVGElement, PackageSeamIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PackageSeam"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M14.398 4.57901C15.3766 3.96097 16.6234 3.96097 17.602 4.57901L25.102 9.31586C25.9723 9.86551 26.5 10.823 26.5 11.8523V20.5969C26.5 21.6674 25.9296 22.6568 25.0031 23.1932L17.5031 27.5353C16.5733 28.0736 15.4267 28.0736 14.4969 27.5353L6.99686 23.1932C6.07041 22.6568 5.49997 21.6674 5.49997 20.5969V11.8523C5.49997 10.823 6.0277 9.86551 6.89799 9.31585L14.398 4.57901ZM16.534 6.26999C16.2078 6.06398 15.7922 6.06397 15.466 6.26999L8.46355 10.6926L11.2329 12.223L18.8338 7.72248L16.534 6.26999ZM20.7332 8.92211L13.2633 13.3451L16 14.8575L23.5364 10.6926L20.7332 8.92211ZM7.49997 20.5969V12.4452L15 16.5899V25.5155L7.99894 21.4623C7.69012 21.2835 7.49997 20.9537 7.49997 20.5969ZM24.001 21.4623L17 25.5155V16.5899L24.5 12.4452V20.5969C24.5 20.9537 24.3098 21.2835 24.001 21.4623Z" />
    </svg>
  ),
)

PackageSeamIcon.displayName = 'PackageSeamIcon'
