import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Permite scripts externos
    rollupOptions: {
      external: [],
    },
  },
  // Permite carregar scripts do Facebook
  server: {
    headers: {
      'Content-Security-Policy': "script-src 'self' 'unsafe-inline' https://connect.facebook.net"
    }
  }
})
