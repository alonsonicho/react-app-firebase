import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@publicPages': '/src/pages/public',
      '@privatePages': '/src/pages/private',
      '@components': '/src/components',
      '@services': '/src/services',
    }
  }
})
