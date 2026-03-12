import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TwitterIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TwitterIcon = forwardRef<SVGSVGElement, TwitterIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Twitter"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M21.825 14.099C21.825 17.768 18.936 22 13.653 22C12.031 22 10.521 21.54 9.25 20.752C9.475 20.778 9.704 20.791 9.935 20.791C11.281 20.791 12.52 20.347 13.503 19.602C12.245 19.58 11.185 18.777 10.819 17.674C10.994 17.706 11.174 17.724 11.359 17.724C11.621 17.724 11.875 17.69 12.117 17.626C10.802 17.371 9.812 16.249 9.812 14.904C9.812 14.891 9.812 14.88 9.813 14.868C10.2 15.076 10.642 15.201 11.114 15.216C10.342 14.718 9.835 13.868 9.835 12.904C9.835 12.395 9.978 11.919 10.224 11.508C11.641 13.189 13.758 14.294 16.145 14.41C16.096 14.206 16.071 13.994 16.071 13.777C16.071 12.244 17.357 11 18.943 11C19.769 11 20.516 11.338 21.04 11.877C21.694 11.753 22.309 11.521 22.864 11.203C22.649 11.852 22.194 12.395 21.601 12.739C22.182 12.672 22.735 12.523 23.25 12.302C22.866 12.859 22.378 13.348 21.817 13.74C21.823 13.859 21.825 13.979 21.825 14.099Z" />
            <path d="M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z" />
          </>
    </svg>
  ),
)

TwitterIcon.displayName = 'TwitterIcon'
