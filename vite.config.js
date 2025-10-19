import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
})

