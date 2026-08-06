import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Absolute root base — reliable on Vercel (and any apex host).
export default defineConfig({
  base: '/',
  plugins: [react()],
  // esbuild keeps @media (max-width: 480px). LightningCSS rewrites to
  // width<=480px which older iOS Safari ignores → blank beige screen.
  build: {
    cssMinify: 'esbuild',
  },
})
