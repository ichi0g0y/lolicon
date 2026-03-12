import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PlayCircleFillIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PlayCircleFillIcon = forwardRef<SVGSVGElement, PlayCircleFillIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PlayCircleFill"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28ZM19 16.0005C19 15.6645 18.825 15.3835 18.668 15.1755L18.667 15.1735C17.8318 14.0876 16.6652 13.1972 15.5682 12.3599L15.565 12.3575C15.386 12.2215 15.209 12.0855 15.035 11.9515L15.034 11.9505C14.64 11.6455 14.057 11.6925 13.724 12.0635C13.5728 12.2319 13.4998 12.4371 13.5 12.6406L13.5004 19.3517C13.4981 19.5578 13.5709 19.766 13.724 19.9365C14.057 20.3085 14.641 20.3535 15.034 20.0495C15.218 19.9075 15.403 19.7665 15.59 19.6245C16.689 18.7885 17.818 17.9295 18.667 16.8265L18.668 16.8255C18.825 16.6175 19 16.3355 19 16.0005Z" />
    </svg>
  ),
)

PlayCircleFillIcon.displayName = 'PlayCircleFillIcon'
