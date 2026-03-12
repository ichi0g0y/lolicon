import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface StarHalfIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const StarHalfIcon = forwardRef<SVGSVGElement, StarHalfIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="StarHalf"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 22.1947C16.2397 22.1947 16.4795 22.2521 16.698 22.367L20.3632 24.2939C21.4636 24.8724 22.7498 23.938 22.5396 22.7126L21.8396 18.6314C21.7562 18.1448 21.9175 17.6483 22.271 17.3037L25.2362 14.4133C26.1265 13.5455 25.6352 12.0335 24.4049 11.8548L20.3071 11.2593C19.8185 11.1883 19.3962 10.8815 19.1777 10.4387L17.3451 6.72549C17.07 6.16806 16.535 5.88934 16 5.88934V8.51912L17.3842 11.3239C17.894 12.3569 18.8795 13.0729 20.0195 13.2385L23.1147 13.6883L20.875 15.8715C20.0501 16.6756 19.6737 17.8341 19.8684 18.9695L20.3971 22.0522L17.6287 20.5967C17.1189 20.3287 16.5594 20.1947 16 20.1947V22.1947Z" />
            <path d="M16 5.88934C15.465 5.88934 14.93 6.16806 14.6549 6.7255L12.8223 10.4387C12.6038 10.8815 12.1814 11.1883 11.6929 11.2593L7.59505 11.8548C6.36472 12.0335 5.87346 13.5455 6.76373 14.4133L9.72894 17.3037C10.0825 17.6483 10.2438 18.1448 10.1603 18.6314L9.46035 22.7126C9.25018 23.938 10.5363 24.8724 11.6368 24.2939L15.302 22.367C15.5205 22.2521 15.7602 22.1947 16 22.1947V5.88934Z" />
          </>
    </svg>
  ),
)

StarHalfIcon.displayName = 'StarHalfIcon'
