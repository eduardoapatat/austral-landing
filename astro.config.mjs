// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio de ejemplo: cámbialo por el real; se usa para las URLs absolutas de Open Graph.
  site: 'https://austral-ejemplo.cl',
  vite: {
    plugins: [tailwindcss()]
  }
});