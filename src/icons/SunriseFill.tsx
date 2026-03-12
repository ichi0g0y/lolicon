import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface SunriseFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const SunriseFillIcon = forwardRef<SVGSVGElement, SunriseFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SunriseFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16.001 5C15.449 5 15.001 5.448 15.001 6V8C15.001 8.552 15.449 9 16.001 9C16.553 9 17.001 8.552 17.001 8V6C17.001 5.448 16.553 5 16.001 5ZM7.708 8.707C8.099 8.317 8.732 8.317 9.122 8.707L10.537 10.121C10.927 10.512 10.927 11.145 10.537 11.536C10.146 11.926 9.513 11.926 9.122 11.536L7.708 10.121C7.318 9.731 7.318 9.098 7.708 8.707ZM23.122 8.707C23.513 8.317 24.146 8.317 24.536 8.707C24.926 9.098 24.927 9.731 24.537 10.121L23.122 11.536C22.732 11.926 22.099 11.926 21.708 11.536C21.318 11.145 21.318 10.512 21.708 10.121L23.122 8.707ZM28 17C28 16.448 27.552 16 27 16H25C24.448 16 24 16.448 24 17C24 17.552 24.448 18 25 18H27C27.552 18 28 17.552 28 17ZM7 16C7.552 16 8 16.448 8 17C8 17.552 7.552 18 7 18H5C4.448 18 4 17.552 4 17C4 16.448 4.448 16 5 16H7ZM5 21H11.5278C10.5777 19.9385 10 18.5367 10 17C10 13.6863 12.6863 11 16 11C19.3137 11 22 13.6863 22 17C22 18.5367 21.4223 19.9385 20.4722 21H27C27.552 21 28 21.448 28 22C28 22.552 27.552 23 27 23H16H5C4.448 23 4 22.552 4 22C4 21.448 4.448 21 5 21ZM25 25C25.552 25 26 25.448 26 26C26 26.552 25.552 27 25 27H7C6.448 27 6 26.552 6 26C6 25.448 6.448 25 7 25H25Z" />
    </svg>
  ),
)

SunriseFillIcon.displayName = 'SunriseFillIcon'
