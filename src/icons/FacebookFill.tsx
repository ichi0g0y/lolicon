import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface FacebookFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const FacebookFillIcon = forwardRef<SVGSVGElement, FacebookFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FacebookFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M28 16.0085C28 6.00141 26 4 16 4C6 4 4 6.00141 4 16.0085C4 25.2927 5.72151 27.6861 13.956 27.9834V20.3445H11V16.9652H13.956V14.4724C13.956 11.5794 15.745 10.0042 18.359 10.0042C19.61 10.0042 20.686 10.0963 21 10.1373V13.1605L19.187 13.1615C17.766 13.1615 17.491 13.8279 17.491 14.8066V16.9652H20.881L20.439 20.3445H17.491V28C27.491 28 28 26.0155 28 16.0085Z" />
    </svg>
  ),
)

FacebookFillIcon.displayName = 'FacebookFillIcon'
