import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://<user>.github.io/total-nottie/
// If you rename the repo, update this path to match.
const repoBase = '/total-nottie/'

// https://vite.dev/config/
export default defineConfig({
  base: repoBase,
  plugins: [react()],
})
