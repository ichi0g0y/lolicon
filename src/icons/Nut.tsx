import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface NutIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const NutIcon = forwardRef<SVGSVGElement, NutIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nut"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.602 4.57901C16.6234 3.96097 15.3766 3.96097 14.398 4.57901L6.89802 9.31585C6.02773 9.86551 5.5 10.823 5.5 11.8523V20.5969C5.5 21.6674 6.07044 22.6568 6.9969 23.1932L14.4969 27.5353C15.4267 28.0736 16.5734 28.0736 17.5031 27.5353L25.0031 23.1932C25.9296 22.6568 26.5 21.6674 26.5 20.5969V11.8523C26.5 10.823 25.9723 9.86551 25.102 9.31586L17.602 4.57901ZM15.466 6.26999C15.7922 6.06397 16.2078 6.06398 16.534 6.26999L24.034 11.0068C24.3241 11.1901 24.5 11.5092 24.5 11.8523V20.5969C24.5 20.9537 24.3099 21.2835 24.0011 21.4623L16.5011 25.8044C16.1911 25.9838 15.8089 25.9838 15.499 25.8044L7.99897 21.4623C7.69015 21.2835 7.5 20.9537 7.5 20.5969V11.8523C7.5 11.5092 7.67591 11.1901 7.96601 11.0068L15.466 6.26999ZM19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16ZM21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" />
    </svg>
  ),
)

NutIcon.displayName = 'NutIcon'
