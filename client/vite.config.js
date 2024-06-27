import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '^/api': {
  //       // target: 'https://thirukural-six.vercel.app/',
  //       target: 'http://localhost:3000/',
  //       changeOrigin: true,
  //     }
  //   }
  // },                 // Not working in vercel
  plugins: [react()],
})
