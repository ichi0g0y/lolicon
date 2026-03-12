# Lolicon

lol, friendly, cute React iconset

[docs](https://lolicon.ichi0g0y.io)

## Install

```sh
bun add lolicon
```

<details>
<summary>Other package managers</summary>

```sh
pnpm add lolicon
yarn add lolicon
npm i lolicon
```

</details>

## Usage

### Individual Components

```tsx
import { TwitchIcon } from 'lolicon'

export default () => <TwitchIcon size={32} />
```

Each icon is tree-shakeable — only the icons you import are included in your bundle.

### Deep Imports

For even more granular control, import from the icon's own entry point:

```tsx
import { EmailIcon } from 'lolicon/Email'
```

### Dynamic Icon Component

Render icons by name at runtime:

```tsx
import { Icon } from 'lolicon'

export default ({ name }: { name: string }) => (
  <Icon glyph={name} size={24} />
)
```

### Styling

Icons use `currentColor` as fill, so you can style them with CSS:

```tsx
<TwitchIcon size={48} style={{ color: 'magenta' }} />
<TwitchIcon size={48} className="text-purple-500" /> {/* Tailwind */}
```

`ref` forwarding is supported on all components.

### Props

#### Individual Components (`<TwitchIcon />` etc.)

| Prop   | Type             | Default | Details             |
| ------ | ---------------- | ------- | ------------------- |
| `size` | Number or string | `32`    | Sets width & height |
| `...`  | `SVGProps`       |         | All SVG attributes  |

#### Dynamic Component (`<Icon />`)

| Prop    | Type             | Default | Details                |
| ------- | ---------------- | ------- | ---------------------- |
| `glyph` | `GlyphName`      |         | Icon name (kebab-case) |
| `size`  | Number or string | `32`    | Sets width & height    |
| `...`   | `SVGProps`       |         | All SVG attributes     |

### TypeScript

All components are fully typed. `GlyphName` type is exported for use with the dynamic `<Icon />` component:

```tsx
import type { GlyphName } from 'lolicon'
```

## Credits

Icon designs are based on:
- [spectrum-icons](https://github.com/lachlanjc/spectrum-icons) by [@lachlanjc](https://github.com/lachlanjc), originally from [Spectrum](https://spectrum.chat)'s iconset
- [supercons](https://github.com/lachlanjc/supercons) by [@lachlanjc](https://github.com/lachlanjc)
