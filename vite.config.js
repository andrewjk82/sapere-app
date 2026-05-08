import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // These are server-only packages used in Vercel API routes (/api/).
      // Excluding them from the client bundle prevents build errors and
      // keeps the bundle size small.
      external: ['firebase-admin', 'nodemailer', 'jsdom'],
    },
  },
})
