import type { MetaFunction } from '@remix-run/cloudflare'
import { DoorLeaveIcon } from 'lolicon'
import { css } from 'styled-system/css'
import { flex } from 'styled-system/patterns'
import { Icons } from '~/datas/icons'

export const meta: MetaFunction = () => {
  return [{ title: 'LOLICON' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div
      className={flex({
        w: 'full',
        justify: 'center',
        alignItems: 'center',
        direction: 'column',
        gap: '2rem',
        px: { base: '0rem', sm: '2rem', md: '3rem', lg: '4rem' },
      })}
    >
      <span className={css({ fontWeight: '900', fontSize: '4xl', mt: '4rem' })}>LOLICON</span>
      <span>lol, cute, friendry Rect iconset :)</span>
      <a
        href='https://github.com/ichi0g0y/lolicon'
        target='_blank'
      >
        <span className={flex({ fontWeight: '800', fontSize: 'lg', alignItems: 'center' })}>
          Github
          <DoorLeaveIcon />
        </span>
      </a>

      <div
        className={flex({
          wrap: 'wrap',
          fontSize: '0.7rem',
          justify: 'center',
          gap: '1rem',
        })}
      >
        {Icons.map((icon) => {
          return (
            <div
              key={icon.name}
              className={flex({
                direction: 'column',
                justify: 'start',
                alignItems: 'center',
                bg: 'neutral.200',
                rounded: 'xl',
                w: '6rem',
                h: '7rem',
                p: '1rem',
                gap: '1rem',
                whiteSpace: 'wrap',
                wordBreak: 'break-word',
                textAlign: 'center',
              })}
            >
              <icon.icon />
              {icon.name}
            </div>
          )
        })}
      </div>

      <div
        className={flex({
          justify: 'center',
          alignItems: 'center',
          py: '4rem',
          fontWeight: '800',
          fontSize: 'md',
        })}
      >
        presented by ichi0g0y
      </div>
    </div>
  )
}
