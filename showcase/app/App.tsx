import { useState, useCallback, useEffect, createElement } from 'react'
import type { ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  CloudDownloadIcon,
  DoorLeaveIcon,
  SunIcon,
  MoonIcon,
  ContrastIcon,
  SearchIcon,
  CodeIcon,
  EmbedIcon,
} from 'lolicon'
import { Icons } from '~/datas/icons'

type Theme = 'system' | 'light' | 'dark'

function toKebab(name: string): string {
  return name
    .replace(/^_/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/(\d)([A-Z])/g, '$1-$2')
    .toLowerCase()
}

function applyTheme(theme: Theme) {
  if (theme === 'system') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', isDark)
  } else {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }
}

const themeOrder: Theme[] = ['system', 'light', 'dark']
const themeIcons = {
  system: <ContrastIcon size={22} />,
  light: <SunIcon size={22} />,
  dark: <MoonIcon size={22} />,
}

function loadStored<T>(key: string, fallback: T, valid: T[]): T {
  const v = localStorage.getItem(key)
  return v !== null && valid.includes(v as T) ? (v as T) : fallback
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => loadStored('lolicon-theme', 'system', themeOrder))
  const [filter, setFilter] = useState('')
  const [mode, setMode] = useState<'jsx' | 'glyph'>(() => loadStored('lolicon-mode', 'jsx', ['jsx', 'glyph']))
  const [copiedName, setCopiedName] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem('lolicon-theme', theme)
    applyTheme(theme)
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lolicon-mode', mode)
  }, [mode])

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = themeOrder.indexOf(prev)
      return themeOrder[(idx + 1) % themeOrder.length]
    })
  }, [])

  const handleCopy = useCallback(
    (name: string) => {
      const glyph = toKebab(name)
      const text = mode === 'jsx' ? `<${name}Icon />` : glyph
      navigator.clipboard.writeText(text)
      setCopiedName(name)
      setTimeout(() => setCopiedName(null), 1200)
    },
    [mode],
  )

  const handleDownload = useCallback(
    (e: React.MouseEvent, name: string, Icon: ComponentType<{ size?: number | string }>) => {
      e.stopPropagation()
      const svgString = renderToStaticMarkup(createElement(Icon, { size: 32 }))
      const blob = new Blob([svgString], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${toKebab(name)}.svg`
      a.click()
      URL.revokeObjectURL(url)
    },
    [],
  )

  const filtered = filter
    ? Icons.filter((icon) => {
        const q = filter.toLowerCase()
        return icon.name.toLowerCase().includes(q) || toKebab(icon.name).includes(q)
      })
    : Icons

  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-8 px-0 sm:px-8 md:px-12 lg:px-16'>
      <div className='absolute top-4 right-4 flex items-center gap-1'>
        <button
          type='button'
          onClick={() => setMode((m) => (m === 'jsx' ? 'glyph' : 'jsx'))}
          title={mode === 'jsx' ? 'Copy as JSX' : 'Copy as glyph name'}
          className='rounded-lg p-2 transition-colors hover:bg-ctp-l-surface1 dark:hover:bg-ctp-surface1'
        >
          {mode === 'jsx' ? <CodeIcon size={22} /> : <EmbedIcon size={22} />}
        </button>
        <button
          type='button'
          onClick={cycleTheme}
          title={`Theme: ${theme}`}
          className='rounded-lg p-2 transition-colors hover:bg-ctp-l-surface1 dark:hover:bg-ctp-surface1'
        >
          {themeIcons[theme]}
        </button>
      </div>

      <span className='mt-16 text-5xl' style={{ fontFamily: '"Cherry Bomb One", cursive' }}>LOLICON</span>
      <span>lol, cute, friendry Rect iconset :)</span>
      <a href='https://github.com/ichi0g0y/lolicon' target='_blank'>
        <span className='flex items-center text-lg font-extrabold'>
          Github
          <DoorLeaveIcon />
        </span>
      </a>

      <div className='flex w-full max-w-2xl items-center'>
        <div className='relative flex-1'>
          <SearchIcon size={18} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-40' />
          <input
            type='text'
            placeholder='Filter icons...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='w-full rounded-lg border border-ctp-l-surface1 bg-ctp-l-base py-2 pr-3 pl-9 text-sm outline-none transition-colors focus:border-ctp-l-lavender dark:border-ctp-surface1 dark:bg-ctp-surface0 dark:focus:border-ctp-lavender'
          />
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-4 text-[0.65rem]'>
        {filtered.map((icon) => {
          const isCopied = copiedName === icon.name
          const displayName = mode === 'jsx' ? `${icon.name}Icon` : toKebab(icon.name)
          return (
            <div
              key={icon.name}
              onClick={() => handleCopy(icon.name)}
              className='group relative flex h-36 w-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-ctp-l-surface0 p-4 text-center whitespace-normal break-words transition-all select-none hover:scale-105 hover:bg-ctp-l-surface1 active:scale-95 dark:bg-ctp-surface0 dark:hover:bg-ctp-surface1'
            >
              <button
                type='button'
                onClick={(e) => handleDownload(e, icon.name, icon.icon)}
                aria-label='Download SVG'
                title='Download SVG'
                className='absolute top-2 right-2 cursor-pointer rounded-md p-1 opacity-0 transition-opacity hover:bg-ctp-l-surface2 group-hover:opacity-100 dark:hover:bg-ctp-surface2'
              >
                <CloudDownloadIcon size={21} />
              </button>
              <icon.icon size={52} />
              {isCopied ? (
                <span className='font-bold text-ctp-l-green dark:text-ctp-green'>Copied!</span>
              ) : (
                displayName
              )}
            </div>
          )
        })}
      </div>

      <div className='flex items-center justify-center py-16 text-base font-extrabold'>
        presented by ichi0g0y
      </div>
    </div>
  )
}
