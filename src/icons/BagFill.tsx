import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface BagFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const BagFillIcon = forwardRef<SVGSVGElement, BagFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BagFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M16 11.5c-.711 0-1.377.007-2 .024-8.208.213-9 1.935-9 7.976s.792 7.764 9 7.976c.623.017 1.289.024 2 .024 10.083 0 11-1.5 11-8s-.917-8-11-8zm-.018 5.88c1.299-1.28 2.597-.96 3.247-.32 2.597 2.56-2.45 5.94-3.247 5.94-.796 0-5.843-3.38-3.246-5.94.65-.64 1.948-.96 3.246.32z" />
            <path d="M16 4.5a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 6 0v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5z" />
          </>
    </svg>
  ),
)

BagFillIcon.displayName = 'BagFillIcon'
