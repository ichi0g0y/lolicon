import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MessageExclamationFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MessageExclamationFillIcon = forwardRef<SVGSVGElement, MessageExclamationFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MessageExclamationFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16.4671 6.93335C15.7558 6.93335 15.0901 6.9408 14.4671 6.95697C6.259 7.16986 5.4671 8.89191 5.4671 14.9333C5.4671 15.6611 5.47858 16.326 5.51315 16.9333C5.6911 20.0607 6.48077 21.6564 9.46319 22.3909C9.46545 22.3914 9.4671 22.3934 9.4671 22.3958V25.0648C9.4671 25.8636 10.3572 26.34 11.0218 25.8969L15.4738 22.9288L15.4753 22.9282L15.4766 22.9281C15.7965 22.9316 16.1266 22.9333 16.4671 22.9333C26.5504 22.9333 27.4671 21.4333 27.4671 14.9333C27.4671 8.43335 26.5504 6.93335 16.4671 6.93335ZM20.5 14.9999C20.5 17.4852 18.4853 19.4999 16 19.4999C13.5147 19.4999 11.5 17.4852 11.5 14.9999C11.5 12.5147 13.5147 10.4999 16 10.4999C18.4853 10.4999 20.5 12.5147 20.5 14.9999ZM15 14.7499C15 15.3019 15.448 15.7499 16 15.7499C16.552 15.7499 17 15.3019 17 14.7499V12.7499C17 12.1979 16.552 11.7499 16 11.7499C15.448 11.7499 15 12.1979 15 12.7499V14.7499ZM15 17.2499C15 17.8019 15.448 18.2499 16 18.2499C16.552 18.2499 17 17.8019 17 17.2499C17 16.6979 16.552 16.2499 16 16.2499C15.448 16.2499 15 16.6979 15 17.2499Z" />
    </svg>
  ),
)

MessageExclamationFillIcon.displayName = 'MessageExclamationFillIcon'
