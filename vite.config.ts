import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/aspirvacuum/', // Define o caminho base para GitHub Pages
  plugins: [
    react({
      babel: {
        parserOpts: {
          strictMode: false, // Desativa o modo estrito para evitar erros com literais octais
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
});
