import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import localSyncPlugin from './plugins/localSyncPlugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localSyncPlugin()],
  // Honour the PORT env var (used by the local preview harness); default 5173.
  server: { port: Number(process.env.PORT) || 5173 },
  build: {
    rollupOptions: {
      // These are server-only packages used in Vercel API routes (/api/).
      // Excluding them from the client bundle prevents build errors and
      // keeps the bundle size small.
      external: ['firebase-admin', 'nodemailer', 'jsdom'],
      // manualChunks used to split src/constants/seed* into per-chapter chunks so
      // 40MB of question seeds did not land in one bundle. Those files are gone
      // (2026-10) — question content is fetched from the CDN at runtime — so there
      // is nothing left to split.
    },
  },
})
