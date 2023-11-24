import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/sass/app.scss',
        'resources/ts/Index.tsx',
        'resources/js/app.jsx',
        // '/resources/js/Pages/app.jsx'
      ],
      refresh: true,
    }),
    react(),
  ],
  server: {
    hmr: {
      host: 'localhost',
    },
  },
  // build: {
  //   outDir: 'dist', // 出力先ディレクトリ
  // },
});


