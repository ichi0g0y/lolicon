import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface FacebookIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const FacebookIcon = forwardRef<SVGSVGElement, FacebookIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Facebook"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z" />
            <path d="M13.956 20.333V28L17.491 27.8477V20.333H20.439L20.881 16.956H17.491V14.799C17.491 13.821 17.766 13.155 19.187 13.155L21 13.154V10.133C20.686 10.092 19.61 10 18.359 10C15.745 10 13.956 11.574 13.956 14.465V16.956H11V20.333H13.956Z" />
          </>
    </svg>
  ),
)

FacebookIcon.displayName = 'FacebookIcon'
