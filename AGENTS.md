## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Security headers

`vercel.json` sets the security headers, including a Content-Security-Policy. Its `script-src` allows only the site's own scripts and the 4 inline scripts the build emits, each by its `sha256` hash:

- the `is:inline` script in `src/layouts/Layout.astro` that adds the `js` class;
- the scripts in `Nav.astro`, `Shop.astro` and `ProductCard.astro`, which Astro inlines because they are small.

If any of them changes, even by a single space or through a dependency update that alters the minified output, recalculate the hashes from `dist/*.html` after `pnpm build`. Otherwise the browser blocks the script. The same applies to a new inline script. Nothing loads from other domains: fonts, photos and scripts are local, so anything external must be added to the CSP.

## Design

Follow the design system in DESIGN.md for all UI work.

@DESIGN.md
