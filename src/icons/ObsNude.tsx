import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ObsNudeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ObsNudeIcon = forwardRef<SVGSVGElement, ObsNudeIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ObsNude"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <g>
                <path d='M16,5.53c-5.78,0-10.47,4.69-10.47,10.47s4.69,10.47,10.47,10.47,10.47-4.69,10.47-10.47-4.69-10.47-10.47-10.47ZM25.19,16.64c-.8-1.53-2.96-2.18-4.01-2.12-2.56.16-4.75,2.15-4.72,4.72,0,.67-.04.96.25,1.57.04.09.09.17.09.25.01.09-.04.18-.09.26-.47.68-1.08,1.26-1.79,1.68-1.55.94-3.57,1.1-5.24.38-.02-.01,0,0,.05,0,.02,0,.05.01.08.02.92.24,1.82.05,2.45-.15,2.23-.68,3.53-3.15,3.02-5.42-.44-2.06-1.89-3.59-4-3.7-.11,0-.23,0-.31-.04-.09-.05-.13-.14-.17-.23-1.31-2.73-.02-6.2,2.52-7.45-2.42,1.66-1.98,5.17-.32,6.8,1.35,1.33,3.45,1.79,5.18,1.05.88-.36,1.29-.61,1.82-1.42.04-.06.09-.12.14-.15h0c.19-.1.91.07,1.14.12,1.94.48,3.56,2.02,4.13,3.93.08.25.14.55.18.81,0,.02,0,0-.02-.04-.09-.3-.21-.6-.36-.88Z' />
              </g>
    </svg>
  ),
)

ObsNudeIcon.displayName = 'ObsNudeIcon'
