import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface TvCastFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const TvCastFillIcon = forwardRef<SVGSVGElement, TvCastFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TvCastFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <>
            <path d="M15.1755 20.082C15.3835 19.925 15.6645 19.75 16.0005 19.75C16.3355 19.75 16.6175 19.925 16.8255 20.082L16.8265 20.083C17.9295 20.932 18.7885 22.061 19.6245 23.16C19.7665 23.347 19.9075 23.532 20.0495 23.716C20.3535 24.109 20.3085 24.693 19.9365 25.026C19.766 25.1791 19.5578 25.2519 19.3517 25.2497L12.6406 25.25C12.4371 25.2503 12.2319 25.1772 12.0635 25.026C11.6925 24.693 11.6455 24.11 11.9505 23.716L11.9515 23.715C12.0855 23.541 12.2215 23.364 12.3575 23.185L12.3599 23.1819C13.1972 22.0848 14.0876 20.9182 15.1735 20.083L15.1755 20.082Z" />
            <path d="M16 6.74997C15.2887 6.74997 14.623 6.75742 14 6.77359C5.7919 6.98648 5 8.70853 5 14.75C5 20.1258 5.62701 22.0816 11.5482 22.5973C11.5526 22.5915 11.5569 22.5858 11.5613 22.58L11.565 22.5752L11.6021 22.5266C12.4145 21.4619 13.3724 20.2067 14.5639 19.2903L14.6404 19.2315L14.6515 19.2259C14.9163 19.0353 15.3875 18.75 16.0005 18.75C16.6784 18.75 17.1843 19.0999 17.428 19.2838L17.4833 19.3256L17.489 19.3313C18.6728 20.2568 19.585 21.4562 20.3864 22.5098L20.4204 22.5545C20.4312 22.5688 20.442 22.583 20.4528 22.5972C26.373 22.0813 27 20.1255 27 14.75C27 8.24997 26.0833 6.74997 16 6.74997Z" />
          </>
    </svg>
  ),
)

TvCastFillIcon.displayName = 'TvCastFillIcon'
