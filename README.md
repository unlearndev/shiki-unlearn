# shiki-unlearn

A red-accented dark [Shiki](https://shiki.style) code theme for Unlearn. Syntax
is highlighted with the brand red accent (`#ff3b30`) over neutral greys, instead
of a default multicolour palette.

## Install

```bash
npm i -D shiki-unlearn
```

## Usage

### Shiki

```js
import { codeToHtml } from 'shiki'
import { unlearnRed } from 'shiki-unlearn'

const html = await codeToHtml(code, { lang: 'ts', theme: unlearnRed })
```

### Slidev (`setup/shiki.ts`)

```ts
import { defineShikiSetup } from '@slidev/types'
import unlearnRed from 'shiki-unlearn'

export default defineShikiSetup(() => ({
  themes: {
    dark: unlearnRed,
    light: unlearnRed,
  },
}))
```

## License

MIT
