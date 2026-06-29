import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import localSyncPlugin from './plugins/localSyncPlugin.js'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localSyncPlugin()],
  // Honour the PORT env var (used by the local preview harness); default 5173.
  server: { port: Number(process.env.PORT) || 5173 },
  resolve: {
    alias: [
      {
        find: 'firebase/firestore',
        replacement: path.resolve(__dirname, 'src/firebase/firestoreWrapper.js'),
        customResolver(updatedId, importer) {
          // If the file requesting 'firebase/firestore' is the wrapper itself,
          // bypass the alias and let Vite fetch the raw module from node_modules.
          if (importer && importer.includes('firestoreWrapper.js')) {
            return null; 
          }
          return this.resolve(updatedId, importer, { skipSelf: true });
        }
      }
    ]
  },
  build: {
    rollupOptions: {
      // These are server-only packages used in Vercel API routes (/api/).
      // Excluding them from the client bundle prevents build errors and
      // keeps the bundle size small.
      external: ['firebase-admin', 'nodemailer', 'jsdom'],
    },
  },
})
