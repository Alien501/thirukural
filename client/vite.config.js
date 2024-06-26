import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/api': {
        target: 'https://thirukural-six.vercel.app/',
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
})
