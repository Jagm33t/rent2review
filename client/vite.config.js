import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Add this line to make the server accessible over the local network
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  build: {
    // Adjust the chunk size warning limit (value in KB)
    chunkSizeWarningLimit: 500, // Set limit to 500 KB
  },
  plugins: [react()],
})
