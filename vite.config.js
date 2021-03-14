import path from 'path'
/**
 * @type {import('vite').UserConfig}
 */
const vue = require('@vitejs/plugin-vue')

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
    vue(/*options*/)
  ]
}