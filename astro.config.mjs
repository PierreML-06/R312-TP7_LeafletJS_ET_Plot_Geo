// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify({
    // En "astro dev", l'émulation des Edge Functions Netlify (Deno) échoue et
    // affiche une erreur en surimpression. Le projet n'en utilise pas : on la coupe.
    devFeatures: { environmentVariables: false, images: true, edgeFunctions: false }
  })
});