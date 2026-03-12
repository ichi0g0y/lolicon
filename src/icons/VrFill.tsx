import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface VrFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const VrFillIcon = forwardRef<SVGSVGElement, VrFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VrFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M10.952 9.791C12.164 9.55 13.744 9.5 16 9.5C18.256 9.5 19.836 9.55 21.048 9.791C22.158 10.007 22.625 10.324 22.901 10.655C23.221 11.039 23.542 11.749 23.745 13.252C23.8097 13.7261 23.8588 14.2444 23.8957 14.8149C22.4331 13.7878 20.0061 13 16.0019 13C11.9975 13 9.56904 13.7879 8.10457 14.815C8.14166 14.2444 8.19096 13.7262 8.256 13.252C8.458 11.749 8.779 11.039 9.099 10.655C9.375 10.324 9.842 10.007 10.952 9.791ZM6.00671 17.9717C6.10019 8.40552 7.27681 7.5 16 7.5C24.7329 7.5 25.9024 8.40753 25.9936 18.0035C26.1176 18.7455 26.0283 19.3135 26 19.4619C26 19.4746 26 19.4873 26 19.5H25.9922C25.9922 19.5 25.9922 19.5 25.9922 19.5C25.9922 22.2615 23.7536 24.5 20.9922 24.5C19.7143 24.5 18.5484 24.0207 17.6645 23.232C17.1968 22.8146 16.623 22.5 15.9961 22.5C15.3692 22.5 14.7954 22.8146 14.3276 23.232C13.4437 24.0207 12.2778 24.5 11 24.5C8.23856 24.5 5.99998 22.2615 5.99998 19.5C5.99998 19.5 5.85117 18.8552 6.00671 17.9717Z" />
    </svg>
  ),
)

VrFillIcon.displayName = 'VrFillIcon'
