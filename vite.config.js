import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api'),
    },
  },
//proxy do server depois trocar pra o de prod
  server: {
    proxy: {
      '/api': {
        target: 'https://sandbox.api.assinaturas.pagseguro.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
      },
    },
  },
});

