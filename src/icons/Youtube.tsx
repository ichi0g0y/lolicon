import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface YoutubeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const YoutubeIcon = forwardRef<SVGSVGElement, YoutubeIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Youtube"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M20.0065 15.7665L13.5265 19.1265L13.522 12.384L20.0065 15.7665Z" />
            <path d="M15.7501 6C20.8501 6 22.9971 6.576 24.0861 7.665C25.1751 8.754 25.7501 10.9 25.7501 16C25.7501 21.1 25.1751 23.247 24.0861 24.336C22.9971 25.425 20.8501 26 15.7501 26C10.6501 26 8.50306 25.425 7.41406 24.336C6.32506 23.247 5.75006 21.1 5.75006 16C5.75006 10.9 6.32506 8.753 7.41406 7.665C8.50306 6.576 10.6501 6 15.7501 6ZM27.7501 16C27.7501 6 25.7501 4 15.7501 4C5.75006 4 3.75006 6 3.75006 16C3.75006 26 5.75006 28 15.7501 28C25.7501 28 27.7501 26 27.7501 16Z" />
          </>
    </svg>
  ),
)

YoutubeIcon.displayName = 'YoutubeIcon'
