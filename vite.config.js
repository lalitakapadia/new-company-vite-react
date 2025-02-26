import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/new-company-vite-react/', // Change <REPO_NAME> to your repository name
  plugins: [react(), tailwindcss()],

})
