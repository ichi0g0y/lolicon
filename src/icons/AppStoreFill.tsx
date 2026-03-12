import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface AppStoreFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const AppStoreFillIcon = forwardRef<SVGSVGElement, AppStoreFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AppStoreFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 4C26 4 28 6 28 16C28 26 26 28 16 28C6 28 4 26 4 16C4 6 6 4 16 4ZM9.49998 22.9282C9.02169 22.6521 8.85782 22.0405 9.13396 21.5622L9.45854 21H11.7679L10.866 22.5622C10.5899 23.0405 9.97828 23.2044 9.49998 22.9282ZM11.1906 18H9C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20H18.5005L17.3458 18H13.5L17.866 10.4378C18.1422 9.95954 17.9783 9.34795 17.5 9.07181C17.0217 8.79567 16.4101 8.95954 16.134 9.43783L16 9.6699L15.866 9.43787C15.5899 8.95957 14.9783 8.7957 14.5 9.07184C14.0217 9.34798 13.8578 9.95957 14.134 10.4379L14.8453 11.6699L11.1906 18ZM23 20H21.9641L22.866 21.5622C23.1422 22.0405 22.9783 22.6521 22.5 22.9282C22.0217 23.2044 21.4101 23.0405 21.134 22.5622L16.5768 14.6689L17.7315 12.6689L20.8094 18H23C23.5523 18 24 18.4477 24 19C24 19.5523 23.5523 20 23 20Z" />
    </svg>
  ),
)

AppStoreFillIcon.displayName = 'AppStoreFillIcon'
