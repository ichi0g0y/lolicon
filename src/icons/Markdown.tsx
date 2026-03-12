import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface MarkdownIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const MarkdownIcon = forwardRef<SVGSVGElement, MarkdownIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Markdown"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path
            d="M 12 0C 22.5 0 24 1 24 8C 24 15 22.5 16 12 16C 1.5 16 0 15 0 8C 0 1 1.5 0 12 0ZM 4 12L 6 12L 6 7.61032L 7.14252 9.5145L 8 10.9436L 8.85748 9.5145L 10 7.61032L 10 12L 12 12L 12 4L 9.83383 4L 8 7.05635L 6.16617 4L 4 4L 4 12ZM 17 12L 13.5 8L 16 8L 16 4L 18 4L 18 8L 20.5 8L 17 12Z"
            transform="translate(4 8)"
          />
    </svg>
  ),
)

MarkdownIcon.displayName = 'MarkdownIcon'
