import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TerminalFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TerminalFillIcon = forwardRef<SVGSVGElement, TerminalFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TerminalFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 26C5 26 4 25.167 4 16C4 6.833 5 6 16 6C27 6 28 6.833 28 16C28 25.167 27 26 16 26ZM14 18C14 17.448 14.4135 17 14.9231 17H21.0769C21.5865 17 22 17.448 22 18C22 18.552 21.5865 19 21.0769 19H14.9231C14.4135 19 14 18.552 14 18ZM13.5 14.2505C13.5 13.9145 13.325 13.6335 13.168 13.4255L13.167 13.4235C12.3318 12.3376 11.1652 11.4472 10.0682 10.6099L10.065 10.6075C9.88605 10.4715 9.70905 10.3355 9.53505 10.2015L9.53405 10.2005C9.14005 9.89554 8.55705 9.94254 8.22405 10.3135C7.88105 10.6955 7.94005 11.2665 8.34505 11.5795C8.46911 11.6757 8.59463 11.7719 8.72058 11.8684C8.77535 11.9104 8.8302 11.9524 8.88505 11.9945C9.80505 12.6975 10.739 13.4115 11.464 14.2505C10.73 15.1015 9.81305 15.8005 8.88805 16.5055L8.88605 16.5065C8.70605 16.6435 8.52505 16.7815 8.34505 16.9205C7.94105 17.2335 7.88105 17.8045 8.22405 18.1865C8.55705 18.5585 9.14105 18.6035 9.53405 18.2995C9.71805 18.1575 9.90305 18.0165 10.09 17.8745C11.189 17.0385 12.318 16.1795 13.167 15.0765L13.168 15.0755C13.325 14.8675 13.5 14.5855 13.5 14.2505Z" />
    </svg>
  ),
)

TerminalFillIcon.displayName = 'TerminalFillIcon'
