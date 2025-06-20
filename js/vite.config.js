import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from "@tailwindcss/vite";

export default {
    optimizeDeps: {
        include: [
            "@codemirror/state",
            "@codemirror/view",
            "@codemirror/basic-setup",
            "@codemirror/search"
        ],
    },
  plugins: [
      svelte(),
      tailwindcss(),
  ],
  build: {
    lib: {
      entry: 'main.js',
      name: 'LogFormatter',
    formats: ['es']
    }
  }
};