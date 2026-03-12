import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ListBulletedIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ListBulletedIcon = forwardRef<SVGSVGElement, ListBulletedIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ListBulleted"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M10 7C10 8.10457 9.10457 9 8 9C6.89543 9 6 8.10457 6 7C6 5.89543 6.89543 5 8 5C9.10457 5 10 5.89543 10 7ZM15 5.87915C14.448 5.87915 14 6.32715 14 6.87915C14 7.43115 14.448 7.87915 15 7.87915H27C27.552 7.87915 28 7.43115 28 6.87915C28 6.32715 27.552 5.87915 27 5.87915H15ZM15 14.8791C14.448 14.8791 14 15.3271 14 15.8791C14 16.4311 14.448 16.8791 15 16.8791H27C27.552 16.8791 28 16.4311 28 15.8791C28 15.3271 27.552 14.8791 27 14.8791H15ZM14 24.8792C14 24.3272 14.448 23.8792 15 23.8792H27C27.552 23.8792 28 24.3272 28 24.8792C28 25.4312 27.552 25.8792 27 25.8792H15C14.448 25.8792 14 25.4312 14 24.8792ZM8 17.8791C9.10457 17.8791 10 16.9837 10 15.8791C10 14.7746 9.10457 13.8791 8 13.8791C6.89543 13.8791 6 14.7746 6 15.8791C6 16.9837 6.89543 17.8791 8 17.8791ZM10 24.8792C10 25.9837 9.10457 26.8792 8 26.8792C6.89543 26.8792 6 25.9837 6 24.8792C6 23.7746 6.89543 22.8792 8 22.8792C9.10457 22.8792 10 23.7746 10 24.8792Z" />
    </svg>
  ),
)

ListBulletedIcon.displayName = 'ListBulletedIcon'
