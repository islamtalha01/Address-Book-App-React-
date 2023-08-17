import {  defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
  },
  build:{ 
    // outDir:resolve(_dirname,'./server-dist'),
    emptyOutDir:true,
    minify:'terser' //default is esbuild
  },
 
})
