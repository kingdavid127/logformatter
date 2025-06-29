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
    manifest: true,
    rollupOptions: {
        input: 'js/main.js',
        output: {
            entryFileNames: '[name].[hash].js',
            assetFileNames: '[name].[hash].[ext]',
        }
    }
  }
};