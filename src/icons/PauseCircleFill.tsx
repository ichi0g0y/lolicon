import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PauseCircleFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PauseCircleFillIcon = forwardRef<SVGSVGElement, PauseCircleFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PauseCircleFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16ZM14.6465 20.1465C14.8625 19.9305 15 19.5035 15 18.5V13.5C15 12.4965 14.8625 12.0695 14.6465 11.8535C14.4305 11.6375 14.0035 11.5 13 11.5C11.9965 11.5 11.5695 11.6375 11.3535 11.8535C11.1375 12.0695 11 12.4965 11 13.5V18.5C11 19.5035 11.1375 19.9305 11.3535 20.1465C11.5695 20.3625 11.9965 20.5 13 20.5C14.0035 20.5 14.4305 20.3625 14.6465 20.1465ZM21 18.5C21 19.5035 20.8625 19.9305 20.6465 20.1465C20.4305 20.3625 20.0035 20.5 19 20.5C17.9965 20.5 17.5695 20.3625 17.3535 20.1465C17.1375 19.9305 17 19.5035 17 18.5V13.5C17 12.4965 17.1375 12.0695 17.3535 11.8535C17.5695 11.6375 17.9965 11.5 19 11.5C20.0035 11.5 20.4305 11.6375 20.6465 11.8535C20.8625 12.0695 21 12.4965 21 13.5V18.5Z" />
    </svg>
  ),
)

PauseCircleFillIcon.displayName = 'PauseCircleFillIcon'
