import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface EaselAnalyticsFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const EaselAnalyticsFillIcon = forwardRef<SVGSVGElement, EaselAnalyticsFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EaselAnalyticsFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.0003 4.00006C17.0002 3.44774 16.5526 3.00007 16.0002 3C15.448 3 15.0002 3.44774 15.0002 3.99999V5.00536C14.6552 5.00924 14.3219 5.01526 14 5.02362C5.7919 5.23651 5 6.95856 5 13C5 18.3164 5.61323 20.2879 11.3537 20.8297L9.06394 26.9356C8.87002 27.4527 9.13202 28.0292 9.64914 28.223C10.1662 28.417 10.7426 28.155 10.9366 27.6378L12.0657 24.6268L12.7684 22.7529L13.4397 20.9591C13.6225 20.9657 13.8092 20.9714 14 20.9764C14.3218 20.9847 14.655 20.9908 15 20.9946V24C15 24.5523 15.4477 25 16 25C16.5523 25 17.0001 24.5523 17.0001 24V20.9946C17.5492 20.9885 18.0684 20.9768 18.5594 20.9591L19.232 22.7529L19.9347 24.6267L21.0639 27.6378C21.2578 28.155 21.8342 28.417 22.3514 28.223C22.8685 28.0292 23.1305 27.4527 22.9366 26.9356L20.6469 20.8296C26.3868 20.2878 27 18.3162 27 13C27 6.72175 26.1448 5.10816 17.0003 5.00538V4.00006ZM15 16.5C15 17.052 15.448 17.5 16 17.5C16.552 17.5 17 17.052 17 16.5V9.5C17 8.948 16.552 8.5 16 8.5C15.448 8.5 15 8.948 15 9.5V16.5ZM11 16.5C11 17.052 11.448 17.5 12 17.5C12.552 17.5 13 17.052 13 16.5V12.5C13 11.948 12.552 11.5 12 11.5C11.448 11.5 11 11.948 11 12.5V16.5ZM20 17.5C19.448 17.5 19 17.052 19 16.5V14.5C19 13.948 19.448 13.5 20 13.5C20.552 13.5 21 13.948 21 14.5V16.5C21 17.052 20.552 17.5 20 17.5Z" />
    </svg>
  ),
)

EaselAnalyticsFillIcon.displayName = 'EaselAnalyticsFillIcon'
