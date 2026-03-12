import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface PieChartIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const PieChartIcon = forwardRef<SVGSVGElement, PieChartIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PieChart"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M24.1915 10.2643C22.4542 7.78315 19.7943 6.33204 17 6.04997L17 15L25.9517 15C25.7875 13.3504 25.2101 11.7189 24.1915 10.2643ZM25.9501 17L16.3154 17L8.42251 22.5267C11.732 26.3785 17.4881 27.1659 21.7358 24.1916C24.217 22.4543 25.6681 19.7943 25.9501 17ZM15 15.4795L15 6.04836C13.3504 6.21262 11.7189 6.79002 10.2642 7.80857C6.01653 10.7828 4.78778 16.4611 7.27535 20.8884L15 15.4795ZM25.8298 9.11717C22.0287 3.68865 14.5456 2.36917 9.11709 6.17026C3.68857 9.97136 2.36909 17.4545 6.17018 22.883C9.97127 28.3115 17.4544 29.631 22.8829 25.8299C28.3114 22.0288 29.6309 14.5457 25.8298 9.11717Z" />
    </svg>
  ),
)

PieChartIcon.displayName = 'PieChartIcon'
