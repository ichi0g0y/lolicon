import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface EaselFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const EaselFillIcon = forwardRef<SVGSVGElement, EaselFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EaselFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16.0002 3C16.5526 3.00007 17.0002 3.44774 17.0003 4.00006V5.00538C26.1448 5.10816 27 6.72175 27 13C27 18.3162 26.3868 20.2878 20.6469 20.8296L22.9366 26.9356C23.1305 27.4527 22.8685 28.0292 22.3514 28.223C21.8342 28.417 21.2578 28.155 21.0639 27.6378L19.9347 24.6267L19.232 22.7529L18.5594 20.9591C18.0684 20.9768 17.5492 20.9885 17.0001 20.9946V24C17.0001 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24V20.9946C14.655 20.9908 14.3218 20.9847 14 20.9764C13.8092 20.9714 13.6225 20.9657 13.4397 20.9591L12.7684 22.7529L12.0657 24.6268L10.9366 27.6378C10.7426 28.155 10.1662 28.417 9.64914 28.223C9.13202 28.0292 8.87002 27.4527 9.06394 26.9356L11.3537 20.8297C5.61323 20.2879 5 18.3164 5 13C5 6.95856 5.7919 5.23651 14 5.02362C14.3219 5.01526 14.6552 5.00924 15.0002 5.00536V3.99999C15.0002 3.44774 15.448 3 16.0002 3Z" />
    </svg>
  ),
)

EaselFillIcon.displayName = 'EaselFillIcon'
