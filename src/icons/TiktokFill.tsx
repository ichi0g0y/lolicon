import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TiktokFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TiktokFillIcon = forwardRef<SVGSVGElement, TiktokFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TiktokFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M27.986 15.968C27.986 26.968 26.986 27.968 15.986 27.968C4.98602 27.968 3.98602 26.968 3.98602 15.968C3.98602 4.96799 4.98602 3.96799 15.986 3.96799C26.986 3.96799 27.986 4.96799 27.986 15.968ZM19.0135 9.15442C19.1954 10.1371 19.7788 10.9799 20.5866 11.5068L20.5871 11.5062C21.1495 11.8733 21.8206 12.0875 22.5407 12.0875V14.6664C21.2033 14.6664 19.9639 14.2386 18.9527 13.5126V18.7533C18.9527 21.371 16.8232 23.5 14.206 23.5C13.1942 23.5 12.2567 23.1814 11.4855 22.64C10.2617 21.7811 9.45929 20.3597 9.45929 18.7538C9.45929 16.1367 11.5888 14.0071 14.206 14.0071C14.4234 14.0071 14.6365 14.0249 14.8459 14.0534V16.6862C14.643 16.6227 14.4293 16.5861 14.206 16.5861C13.0107 16.5861 12.0382 17.5586 12.0382 18.7538C12.0382 19.5858 12.5107 20.3092 13.2007 20.6724C13.5015 20.8307 13.8433 20.9216 14.206 20.9216C15.3738 20.9216 16.3258 19.9927 16.3694 18.8351L16.3738 8.5H18.9527C18.9527 8.72334 18.9742 8.94184 19.0135 9.15442Z" />
    </svg>
  ),
)

TiktokFillIcon.displayName = 'TiktokFillIcon'
