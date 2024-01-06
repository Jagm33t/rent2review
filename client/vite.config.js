import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Add this line to make the server accessible over the local network
    proxy: {
      '/api': {
        target: 'mern-test-app.azurewebsites.net',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
