import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface GlassesFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const GlassesFillIcon = forwardRef<SVGSVGElement, GlassesFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GlassesFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13.5039 16C13.5039 18.7614 11.2653 21 8.50391 21C5.74248 21 3.50391 18.7614 3.50391 16C3.50391 13.2386 5.74248 11 8.50391 11C10.5188 11 12.2553 12.1918 13.0469 13.9089C13.8628 13.3067 14.9784 13 15.9116 13C16.8967 13 18.0834 13.3413 18.9075 14.0107C19.6766 12.2391 21.4417 11 23.4961 11C26.2575 11 28.4961 13.2386 28.4961 16C28.4961 18.7614 26.2575 21 23.4961 21C20.7347 21 18.4961 18.7614 18.4961 16C18.4961 15.9889 18.4961 15.9778 18.4962 15.9667C18.2855 15.8748 18.0741 15.7439 17.868 15.6163C17.6691 15.4931 17.4752 15.373 17.2916 15.294C16.8026 15.082 16.1636 15 15.9116 15C15.6106 15 14.9766 15.068 14.5026 15.274C14.3135 15.3557 14.1174 15.4835 13.9173 15.6139C13.7805 15.7031 13.6419 15.7934 13.5023 15.8712C13.5034 15.914 13.5039 15.9569 13.5039 16Z" />
    </svg>
  ),
)

GlassesFillIcon.displayName = 'GlassesFillIcon'
