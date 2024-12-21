import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000, // Increase the size limit to 1MB or more as needed
    rollupOptions: {
      output: {
        // Define manual chunks for better code splitting
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendors'; // Separate React libraries
            }
            if (id.includes('lodash')) {
              return 'lodash'; // Separate Lodash
            }
            return 'vendor'; // Default vendor chunk
          }
        },
      },
    },
  },
})
