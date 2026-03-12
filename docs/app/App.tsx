import { DoorLeaveIcon } from 'lolicon'
import { Icons } from '~/datas/icons'

export default function App() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-8 px-0 sm:px-8 md:px-12 lg:px-16'>
      <span className='mt-16 text-4xl font-black'>LOLICON</span>
      <span>lol, cute, friendry Rect iconset :)</span>
      <a
        href='https://github.com/ichi0g0y/lolicon'
        target='_blank'
      >
        <span className='flex items-center text-lg font-extrabold'>
          Github
          <DoorLeaveIcon />
        </span>
      </a>

      <div className='flex flex-wrap justify-center gap-4 text-[0.7rem]'>
        {Icons.map((icon) => {
          return (
            <div
              key={icon.name}
              className='flex h-28 w-24 flex-col items-center justify-start gap-4 rounded-xl bg-neutral-200 p-4 text-center whitespace-normal break-words'
            >
              <icon.icon />
              {icon.name}
            </div>
          )
        })}
      </div>

      <div className='flex items-center justify-center py-16 text-base font-extrabold'>presented by ichi0g0y</div>
    </div>
  )
}
