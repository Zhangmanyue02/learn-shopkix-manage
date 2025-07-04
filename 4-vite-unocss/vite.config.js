import vue from '@vitejs/plugin-vue'
import Unocss from '@unocss/vite'

import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue(),
        Unocss()
    ]
})