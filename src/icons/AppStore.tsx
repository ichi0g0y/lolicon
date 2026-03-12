import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AppStoreIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AppStoreIcon = forwardRef<SVGSVGElement, AppStoreIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AppStore"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M9 18H11.1906L14.8453 11.6699L14.134 10.4379C13.8578 9.95957 14.0217 9.34798 14.5 9.07184C14.9783 8.7957 15.5899 8.95957 15.866 9.43787L16 9.6699L16.134 9.43783C16.4101 8.95954 17.0217 8.79567 17.5 9.07181C17.9783 9.34795 18.1422 9.95954 17.866 10.4378L13.5 18H17.3458L18.5005 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18Z" />
            <path d="M21.9641 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H20.8094L17.7315 12.6689L16.5768 14.6689L21.134 22.5622C21.4101 23.0405 22.0217 23.2044 22.5 22.9282C22.9783 22.6521 23.1422 22.0405 22.866 21.5622L21.9641 20Z" />
            <path d="M9.13396 21.5622C8.85782 22.0405 9.02169 22.6521 9.49998 22.9282C9.97828 23.2044 10.5899 23.0405 10.866 22.5622L11.7679 21H9.45854L9.13396 21.5622Z" />
            <path d="M16 4C26 4 28 6 28 16C28 26 26 28 16 28C6 28 4 26 4 16C4 6 6 4 16 4ZM24.336 7.665C23.247 6.576 21.1 6 16 6C10.9 6 8.753 6.576 7.664 7.665C6.575 8.753 6 10.9 6 16C6 21.1 6.575 23.247 7.664 24.336C8.753 25.425 10.9 26 16 26C21.1 26 23.247 25.425 24.336 24.336C25.425 23.247 26 21.1 26 16C26 10.9 25.425 8.754 24.336 7.665Z" />
          </>
    </svg>
  ),
)

AppStoreIcon.displayName = 'AppStoreIcon'
