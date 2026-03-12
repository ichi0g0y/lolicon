import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface BlueskyIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const BlueskyIcon = forwardRef<SVGSVGElement, BlueskyIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bluesky"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z" />
            <path d="M11.6192 10.1075C13.3925 11.4387 15.2998 14.1379 16 15.5864C16.7003 14.138 18.6075 11.4387 20.3808 10.1075C21.6603 9.1469 23.7334 8.40368 23.7334 10.7687C23.7334 11.241 23.4626 14.7364 23.3037 15.3039C22.7517 17.2768 20.7399 17.78 18.9504 17.4754C22.0784 18.0078 22.8741 19.7712 21.1557 21.5346C17.8919 24.8837 16.4647 20.6943 16.0989 19.6209C16.0318 19.4241 16.0004 19.332 16 19.4103C15.9995 19.332 15.9681 19.4241 15.9011 19.6209C15.5354 20.6943 14.1082 24.8838 10.8443 21.5346C9.1258 19.7712 9.92151 18.0077 13.0496 17.4754C11.26 17.78 9.24823 17.2768 8.69623 15.3039C8.5374 14.7363 8.2666 11.2409 8.2666 10.7687C8.2666 8.40368 10.3397 9.1469 11.6191 10.1075H11.6192Z" />
          </>
    </svg>
  ),
)

BlueskyIcon.displayName = 'BlueskyIcon'
