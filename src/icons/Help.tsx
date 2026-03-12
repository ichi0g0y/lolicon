import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface HelpIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const HelpIcon = forwardRef<SVGSVGElement, HelpIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Help"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z" />
            <path d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            <path d="M12.464 12.464c-.39.39-.984.43-1.325.089L7.426 8.84c-.341-.342-.302-.936.089-1.326.39-.39.984-.43 1.326-.089l3.712 3.713c.341.341.302.935-.089 1.325zM24.485 24.485c-.39.39-.984.43-1.325.089l-3.713-3.713c-.341-.341-.302-.935.088-1.326.39-.39.985-.43 1.326-.088l3.713 3.713c.341.341.302.935-.089 1.325zM12.464 19.535c.39.39.43.985.089 1.326L8.84 24.574c-.342.341-.936.302-1.326-.089-.39-.39-.43-.984-.089-1.325l3.713-3.713c.341-.341.935-.302 1.325.088zM24.485 7.515c.39.39.43.984.089 1.326l-3.713 3.712c-.341.341-.935.302-1.326-.089-.39-.39-.43-.984-.088-1.325l3.713-3.713c.341-.341.935-.302 1.325.089z" />
          </>
    </svg>
  ),
)

HelpIcon.displayName = 'HelpIcon'
