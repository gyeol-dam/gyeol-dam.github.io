import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import * as path from 'path'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    assetsDir: '.',
    rollupOptions: {
      input: './index.html',
      output: {
        dir: 'docs'
      },
      plugins: [
        copy({
          targets: [
            // 복사하고 싶은 파일 지정
            { src: 'src/assets/images/*', dest: 'docs/images/' }
          ]
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
