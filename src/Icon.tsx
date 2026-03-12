import { forwardRef } from 'react'
import type { SVGProps } from 'react'
import { glyphs, type GlyphName } from './glyphs'

export interface IconProps extends SVGProps<SVGSVGElement> {
  glyph: GlyphName
  size?: number | string
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ glyph, size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={glyph}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      {glyphs[glyph]}
    </svg>
  ),
)

Icon.displayName = 'Icon'
