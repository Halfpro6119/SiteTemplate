import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { siteMeta } from './src/config.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-site-meta',
      transformIndexHtml(html) {
        return html
          .replace(/\{\{SITE_TITLE\}\}/g, escapeHtml(siteMeta.title))
          .replace(/\{\{SITE_DESCRIPTION\}\}/g, escapeHtml(siteMeta.description));
      },
    },
  ],
  base: '/',
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
