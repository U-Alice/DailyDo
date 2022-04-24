import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.ts
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PkgConfig(),
    OptimizationPersist()
  ]
})


