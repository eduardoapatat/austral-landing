// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL pública (Vercel); se usa para el canonical y las URLs absolutas de Open Graph.
  site: 'https://austral-landing-six.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});