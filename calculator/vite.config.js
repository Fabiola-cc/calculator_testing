import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      requireEnv: false,
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'json', 'html'],
    },
  }
})
