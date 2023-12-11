import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/inqool-react-interview',
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
