<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          strictMode: false, // Desativa o modo estrito para evitar erros com literais octais
        },
      },
    }),
  ],
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 6ae9463449f4961cc2d1b58f602c4cea584717be
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
<<<<<<< HEAD
    strictPort: false,
  },
});
=======
    strictPort: false
  }
})
>>>>>>> 6ae9463449f4961cc2d1b58f602c4cea584717be
