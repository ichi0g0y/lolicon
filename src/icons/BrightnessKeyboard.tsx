import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface BrightnessKeyboardIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const BrightnessKeyboardIcon = forwardRef<SVGSVGElement, BrightnessKeyboardIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BrightnessKeyboard"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16.001 9C15.449 9 15.001 9.448 15.001 10V12C15.001 12.552 15.449 13 16.001 13C16.553 13 17.001 12.552 17.001 12V10C17.001 9.448 16.553 9 16.001 9ZM7.708 12.707C8.099 12.317 8.732 12.317 9.122 12.707L10.537 14.121C10.927 14.512 10.927 15.145 10.537 15.536C10.146 15.926 9.513 15.926 9.122 15.536L7.708 14.121C7.318 13.731 7.318 13.098 7.708 12.707ZM23.122 12.707C23.513 12.317 24.146 12.317 24.536 12.707C24.926 13.098 24.927 13.731 24.537 14.121L23.122 15.536C22.732 15.926 22.099 15.926 21.708 15.536C21.318 15.145 21.318 14.512 21.708 14.121L23.122 12.707ZM28 21C28 20.448 27.552 20 27 20H25C24.448 20 24 20.448 24 21C24 21.552 24.448 22 25 22H27C27.552 22 28 21.552 28 21ZM7 20C7.552 20 8 20.448 8 21C8 21.552 7.552 22 7 22H5C4.448 22 4 21.552 4 21C4 20.448 4.448 20 5 20H7ZM21.0021 20.0328C21.5541 20.0328 22.0021 20.4808 22.0021 21.0328C22.0021 21.5848 21.5541 22.0328 21.0021 22.0328H11.0021C10.4501 22.0328 10.0021 21.5848 10.0021 21.0328C10.0021 20.4808 10.4501 20.0328 11.0021 20.0328H21.0021Z" />
          </>
    </svg>
  ),
)

BrightnessKeyboardIcon.displayName = 'BrightnessKeyboardIcon'
