import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TiktokIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TiktokIcon = forwardRef<SVGSVGElement, TiktokIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tiktok"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z" />
            <path d="M20.5866 11.5068C19.7788 10.9799 19.1954 10.1371 19.0135 9.15442C18.9742 8.94184 18.9527 8.72334 18.9527 8.5H16.3738L16.3694 18.8351C16.3258 19.9927 15.3738 20.9216 14.206 20.9216C13.8433 20.9216 13.5015 20.8307 13.2007 20.6724C12.5107 20.3092 12.0382 19.5858 12.0382 18.7538C12.0382 17.5586 13.0107 16.5861 14.206 16.5861C14.4293 16.5861 14.643 16.6227 14.8459 16.6862V14.0534C14.6365 14.0249 14.4234 14.0071 14.206 14.0071C11.5888 14.0071 9.45929 16.1367 9.45929 18.7538C9.45929 20.3597 10.2617 21.7811 11.4855 22.64C12.2567 23.1814 13.1942 23.5 14.206 23.5C16.8232 23.5 18.9527 21.371 18.9527 18.7533V13.5126C19.9639 14.2386 21.2033 14.6664 22.5407 14.6664V12.0875C21.8206 12.0875 21.1495 11.8733 20.5871 11.5062L20.5866 11.5068Z" />
          </>
    </svg>
  ),
)

TiktokIcon.displayName = 'TiktokIcon'
