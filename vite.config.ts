import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shinkotoni_lp/',
  build: {
    outDir: 'dist',
  },
})
