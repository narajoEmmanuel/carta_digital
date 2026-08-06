import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Absolute root base — reliable on Vercel (and any apex host).
export default defineConfig({
  base: '/',
  plugins: [react()],
})
