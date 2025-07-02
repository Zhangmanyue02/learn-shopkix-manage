import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue(),
        // 使用 unplugin-auto-import 插件实现自动导入功能
        // AutoImport 函数接收一个配置对象，用于指定插件的行为
        AutoImport({
            // imports 数组指定需要自动导入的库，这里包含了 Vue、Vue Router 和 Pinia
            // 配置后，在项目中使用这些库的 API 时无需手动编写 import 语句
            imports: ["vue", "vue-router", "pinia"],
            // dts 选项用于控制是否生成类型声明文件（.d.ts）
            // 设置为 false 表示不生成类型声明文件
            dts: false
        }),
    ]
})