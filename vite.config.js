import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel sets VERCEL=1 → root URL. GitHub Pages needs /carta_digital/.
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/carta_digital/',
  plugins: [react()],
})
