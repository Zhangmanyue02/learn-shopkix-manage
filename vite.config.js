// 引入 vue 插件是为了让 Vite 支持解析和处理 Vue 单文件组件（.vue 文件），
// 该插件会对 Vue 组件进行编译和转换，使其能够在浏览器中正常运行。
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue()
    ]
})