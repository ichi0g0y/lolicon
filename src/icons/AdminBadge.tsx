import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AdminBadgeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AdminBadgeIcon = forwardRef<SVGSVGElement, AdminBadgeIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AdminBadge"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16.437 11.023a1 1 0 0 1 .785.977v2.2H18a1 1 0 0 1 .907 1.42l-2.222 4.8a1 1 0 0 1-1.907-.42v-2.2H14a1 1 0 0 1-.908-1.42l2.223-4.8a1 1 0 0 1 1.122-.557z" />
    </svg>
  ),
)

AdminBadgeIcon.displayName = 'AdminBadgeIcon'
