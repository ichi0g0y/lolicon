# Lolicon

lol, friendly, cute React iconset

[docs](https://lolicon.ichi0g0y.io)

## Usage

```sh
bun add lolicon
pnpm add lolicon
yarn add lolicon
npm i lolicon
```

### Individual Components (tree-shakeable)

```jsx
import { TwitchIcon } from 'lolicon'

export default () => (
  <div style={{ color: 'magenta' }}>
    <TwitchIcon size={32} />
  </div>
)
```

### Dynamic Icon Component

```jsx
import { Icon } from 'lolicon'

export default () => (
  <div style={{ color: 'magenta' }}>
    <Icon glyph="twitch" size={32} />
  </div>
)
```

Built with/supports TypeScript.

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

### Deep Imports

For optimal tree-shaking, you can import individual icons directly:

```js
import { EmailIcon } from 'lolicon/Email'
```

## Credits

Icon designs are based on:
- [spectrum-icons](https://github.com/lachlanjc/spectrum-icons) by [@lachlanjc](https://github.com/lachlanjc), originally from [Spectrum](https://spectrum.chat)'s iconset
- [supercons](https://github.com/lachlanjc/supercons) by [@lachlanjc](https://github.com/lachlanjc)
