import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface SearchFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const SearchFillIcon = forwardRef<SVGSVGElement, SearchFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SearchFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M9.25006 14.2501C9.25006 11.4891 11.4891 9.25006 14.2501 9.25006C17.0111 9.25006 19.2501 11.4891 19.2501 14.2501C19.2501 15.6251 18.6971 16.8681 17.7981 17.7731C16.8911 18.6861 15.6371 19.2501 14.2501 19.2501C11.4891 19.2501 9.25006 17.0111 9.25006 14.2501ZM14.2501 7.25006C10.3841 7.25006 7.25006 10.3841 7.25006 14.2501C7.25006 18.1161 10.3841 21.2501 14.2501 21.2501C15.5161 21.2501 16.7051 20.9131 17.7301 20.3251C18.1631 20.0761 18.7191 20.1091 19.0711 20.4631L23.0411 24.4551C23.4301 24.8471 24.0631 24.8481 24.4551 24.4591C24.8471 24.0701 24.8481 23.4361 24.4591 23.0451L20.4751 19.0381C20.1261 18.6871 20.0941 18.1371 20.3381 17.7061C20.9181 16.6861 21.2501 15.5071 21.2501 14.2501C21.2501 10.3841 18.1161 7.25006 14.2501 7.25006ZM14.2501 18.2501C16.4592 18.2501 18.2501 16.4592 18.2501 14.2501C18.2501 12.0409 16.4592 10.2501 14.2501 10.2501C12.0409 10.2501 10.2501 12.0409 10.2501 14.2501C10.2501 16.4592 12.0409 18.2501 14.2501 18.2501Z" />
    </svg>
  ),
)

SearchFillIcon.displayName = 'SearchFillIcon'
