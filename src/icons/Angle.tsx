import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AngleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AngleIcon = forwardRef<SVGSVGElement, AngleIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angle"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21.7071 7.70711C22.0976 7.31658 22.0976 6.68342 21.7071 6.29289C21.3166 5.90237 20.6834 5.90237 20.2929 6.29289L13.8094 12.7764C13.7983 12.787 13.7873 12.798 13.7766 12.8092L6.00001 20.5858C4.74008 21.8457 5.63243 24 7.41423 24H27C27.5523 24 28 23.5523 28 23C28 22.4477 27.5523 22 27 22H19.0818C19.0967 21.8459 19.1074 21.6886 19.1141 21.5288C19.1374 20.977 18.709 20.5108 18.1572 20.4875C17.6054 20.4643 17.1392 20.8927 17.1159 21.4445C17.1075 21.6439 17.0916 21.8297 17.0692 22H7.41423L14.643 14.7712C14.6672 14.7903 14.6912 14.8097 14.7151 14.8294C15.1408 15.1813 15.7711 15.1215 16.123 14.6959C16.4541 14.2954 16.4207 13.7136 16.0611 13.3532L21.7071 7.70711ZM18.0474 16.1042C17.8191 15.6013 17.2263 15.3787 16.7235 15.607C16.2206 15.8353 15.998 16.428 16.2263 16.9309C16.4773 17.4839 16.6758 18.0798 16.8217 18.6838C16.9514 19.2206 17.4917 19.5507 18.0286 19.421C18.5654 19.2914 18.8955 18.751 18.7658 18.2142C18.5939 17.5026 18.3566 16.7853 18.0474 16.1042Z" />
    </svg>
  ),
)

AngleIcon.displayName = 'AngleIcon'
