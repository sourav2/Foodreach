import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard config for local development
export default defineConfig({
  plugins: [react()],
})