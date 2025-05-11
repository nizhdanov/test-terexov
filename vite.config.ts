import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindAutoReference from 'vite-plugin-vue-tailwind-auto-reference';

// https://vite.dev/config/
export default defineConfig({
  base: '/test-terexov',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindAutoReference('./src/assets/main.css'),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
