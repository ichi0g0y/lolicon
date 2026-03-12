import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PlusSlashMinusIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PlusSlashMinusIcon = forwardRef<SVGSVGElement, PlusSlashMinusIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PlusSlashMinus"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M9.99955 7.99985C10.0003 7.4476 10.4479 7 10.9994 7C11.5524 7 12 7.4476 11.9992 7.99985V9.99955L13.9989 9.99955C14.5512 10.0003 14.9995 10.4471 14.9995 11.0001C14.9995 11.5516 14.5512 12 13.9989 11.9992L12 12V13.9996C11.9992 14.5519 11.5516 14.9995 11.0001 14.9995C10.4471 14.9995 9.99955 14.5519 10.0003 13.9996L9.99955 11.9992L8.00056 12C7.44831 11.9992 7 11.5524 7 10.9994C7 10.4479 7.44831 9.99955 8.00056 10.0003L9.99955 9.99955V7.99985ZM7.51472 24.4853C7.1244 24.095 7.1244 23.4614 7.51472 23.0711L23.0711 7.51471C23.4614 7.12439 24.095 7.12439 24.4853 7.51471C24.8756 7.90503 24.8756 8.5386 24.4853 8.92893L8.92894 24.4853C8.53861 24.8756 7.90505 24.8756 7.51472 24.4853ZM21.9992 20.9995H23.9989C24.5512 21.0002 24.9995 21.4471 24.9995 22.0001C24.9995 22.5516 24.5512 22.9999 23.9989 22.9992L22 22.9999L19.9995 22.9992L18.0006 22.9999C17.4483 22.9992 17 22.5523 17 21.9994C17 21.4478 17.4483 20.9995 18.0006 21.0002L19.9995 20.9995H21.9992Z" />
    </svg>
  ),
)

PlusSlashMinusIcon.displayName = 'PlusSlashMinusIcon'
