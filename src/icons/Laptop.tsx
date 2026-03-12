import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface LaptopIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const LaptopIcon = forwardRef<SVGSVGElement, LaptopIconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Laptop"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 7.75C15.2887 7.75 14.623 7.75745 14 7.77362C5.7919 7.98651 5 9.70856 5 15.75C5 19.0577 5.23738 21.0706 6.79932 22.25H5C4.448 22.25 4 22.698 4 23.25C4 23.802 4.448 24.25 5 24.25H27C27.552 24.25 28 23.802 28 23.25C28 22.698 27.552 22.25 27 22.25H25.2007C26.7626 21.0706 27 19.0577 27 15.75C27 9.25 26.0833 7.75 16 7.75ZM7.24951 19.2923C7.03903 18.4178 6.99951 17.3314 7 15.75C6.99951 14.1686 7.03903 13.0822 7.24951 12.2077C7.41556 11.409 7.50861 11.1888 7.96548 10.8763C8.3237 10.5908 8.99329 10.2783 10.3453 10.0605C11.7291 9.83453 13.5027 9.75055 15.9492 9.75H16C18.4727 9.74945 20.2614 9.83295 21.6547 10.0605C23.0067 10.2783 23.6763 10.5908 24.0345 10.8763C24.4914 11.1888 24.5844 11.409 24.7505 12.2077C24.961 13.0822 25.0005 14.1686 25 15.75C25.0005 17.3314 24.961 18.4178 24.7505 19.2923C24.5844 20.091 24.4914 20.3112 24.0345 20.6237C23.6763 20.9092 23.0067 21.2217 21.6547 21.4395C20.2614 21.6671 18.4727 21.7505 16 21.75H15.9492C13.5027 21.7495 11.7291 21.6655 10.3453 21.4395C8.99329 21.2217 8.3237 20.9092 7.96548 20.6237C7.50861 20.3112 7.41556 20.091 7.24951 19.2923Z" />
    </svg>
  ),
)

LaptopIcon.displayName = 'LaptopIcon'
