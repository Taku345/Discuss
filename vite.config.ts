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
  // server: {
  //   open: true,
  //   cors: false,
  //   hmr: { //hot module reload 開発用なので本番無関係
  //     host: 'localhost',
  //   },
  // },
  base: '/public',
  // root: '/virtual/takuma432/public_html/takuma432.shop/Discuss',
});


