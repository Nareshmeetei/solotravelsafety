import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173, // Use standard Vite port
    strictPort: true, // Fail if port is not available
    // Headers removed - managed by _headers files for consistency
  },
  // Enable better error handling
  define: {
    global: 'globalThis',
  }
});
