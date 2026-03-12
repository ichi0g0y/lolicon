import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TentIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TentIcon = forwardRef<SVGSVGElement, TentIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tent"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M15.8139 16.8357C15.7004 16.8414 15.5902 16.9165 15.5607 17.0612L13.8374 25.5488C13.7839 25.812 13.5613 26 13.3037 26H7.06965C6.27293 26 5.80472 25.2048 6.07866 24.3834C7.71248 19.4902 11.9809 10.6198 14.8371 6.59242C15.1121 6.20507 15.4625 6.0057 15.8139 6C16.1664 6.0057 16.5168 6.20507 16.7918 6.59242C19.648 10.6198 24.2875 19.4902 25.9213 24.3834C26.1953 25.2048 25.7271 26 24.9303 26H18.3252C18.0676 26 17.845 25.812 17.7915 25.5488L16.0682 17.0612C16.0387 16.9165 15.9274 16.8414 15.8139 16.8357Z" />
    </svg>
  ),
)

TentIcon.displayName = 'TentIcon'
