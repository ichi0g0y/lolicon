import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MicIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MicIcon = forwardRef<SVGSVGElement, MicIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mic"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M18 15.25V9.25C18 8.14543 17.1046 7.25 16 7.25C14.8954 7.25 14 8.14543 14 9.25V15.25C14 16.3546 14.8954 17.25 16 17.25C17.1046 17.25 18 16.3546 18 15.25ZM16 5.25C13.7909 5.25 12 7.04086 12 9.25V15.25C12 17.4591 13.7909 19.25 16 19.25C18.2091 19.25 20 17.4591 20 15.25V9.25C20 7.04086 18.2091 5.25 16 5.25ZM9.69508 16.4042C9.38038 16.614 9.22218 16.9982 9.33868 17.358C10.1489 19.862 12.3318 21.7484 15 22.13V25.75C15 26.302 15.448 26.75 16 26.75C16.552 26.75 17 26.302 17 25.75V22.13C19.6682 21.7484 21.8511 19.862 22.6613 17.358C22.7778 16.9982 22.6196 16.614 22.3049 16.4042C21.7203 16.0144 20.9036 16.4109 20.6418 17.0629C19.9033 18.9022 18.1033 20.2009 16 20.2009C13.8967 20.2009 12.0967 18.9022 11.3582 17.0629C11.0964 16.4109 10.2797 16.0144 9.69508 16.4042Z" />
    </svg>
  ),
)

MicIcon.displayName = 'MicIcon'
