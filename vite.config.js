import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Project Pages: https://narajoEmmanuel.github.io/carta_digital/
export default defineConfig({
  base: '/carta_digital/',
  plugins: [react()],
})
