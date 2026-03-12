import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface WineGlassFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const WineGlassFillIcon = forwardRef<SVGSVGElement, WineGlassFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WineGlassFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M7.1149 9.13688L7.11487 9.1449C7.11487 9.17756 7.11647 9.21007 7.11962 9.2423C7.92558 23.8959 8.39608 23.8928 14.7973 23.8509L15 23.8497V26.8551H10.8649C10.3129 26.8551 9.86492 27.3031 9.86492 27.8551C9.86492 28.4071 10.3129 28.8551 10.8649 28.8551H20.8649C21.4169 28.8551 21.8649 28.4071 21.8649 27.8551C21.8649 27.3031 21.4169 26.8551 20.8649 26.8551H17V23.8504L17.0793 23.8509C23.4893 23.8929 23.9523 23.8959 24.7603 9.1819C24.7928 8.58025 24.2675 8.10705 23.684 8.14729C23.661 8.1457 23.638 8.1449 23.6149 8.1449H8.11487C7.84965 8.1449 7.5953 8.25025 7.40776 8.43779C7.38707 8.45848 7.36738 8.47999 7.34872 8.50223C7.20225 8.67307 7.11292 8.89341 7.1149 9.13688Z" />
    </svg>
  ),
)

WineGlassFillIcon.displayName = 'WineGlassFillIcon'
