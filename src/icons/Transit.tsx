import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TransitIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TransitIcon = forwardRef<SVGSVGElement, TransitIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Transit"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M28 16.936C28 6.936 26 4.936 16 4.936C6 4.936 4 6.936 4 16.936C4 26.936 6 28.936 16 28.936C26 28.936 28 26.936 28 16.936ZM25.1831 9.936C25.5192 10.7654 25.7543 11.9043 25.8833 13.5095C25.9607 14.4726 26 15.6035 26 16.936H6C6 15.6035 6.03925 14.4727 6.11666 13.5096C6.24568 11.9044 6.48071 10.7653 6.8167 9.936H25.1831ZM11 20.936C11 21.7644 10.3284 22.436 9.5 22.436C8.67157 22.436 8 21.7644 8 20.936C8 20.1076 8.67157 19.436 9.5 19.436C10.3284 19.436 11 20.1076 11 20.936ZM24 20.936C24 21.7644 23.3284 22.436 22.5 22.436C21.6716 22.436 21 21.7644 21 20.936C21 20.1076 21.6716 19.436 22.5 19.436C23.3284 19.436 24 20.1076 24 20.936ZM16.0008 26.436C17.9558 26.436 19.6185 25.1891 19.9905 23.5269C20.176 22.698 17.597 22.436 16.0011 22.436C14.4053 22.436 11.8052 22.6038 12.0116 23.5269C12.3836 25.1891 14.0457 26.436 16.0008 26.436Z" />
    </svg>
  ),
)

TransitIcon.displayName = 'TransitIcon'
