import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: replace '/SEU_REPO/' with the name of the GitHub repository when deploying via GitHub Pages.
// Ex: base: '/curso-teste-software-landing/'
export default defineConfig({
  plugins: [react()],
  base: '/cursos/'
})
