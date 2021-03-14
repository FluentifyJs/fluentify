import path from 'path'
const vue = require('@vitejs/plugin-vue')
import viteTestPlugin from 'vite-plugin-test'

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'TrygUI'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'default',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    manifest: false,
  },
  plugins: [
    vue(/*options*/),
    viteTestPlugin({ 
      watch: true 
    })
  ]
}