import vue from '@vitejs/plugin-vue'

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode, command }) => {
    console.log("mode=>", mode);
    console.log("command=>>", command);
    console.log("process.cwd()=>>>", process.cwd());
    const env = loadEnv(mode, process.cwd())
    console.log("env=>>>>", env);
    return {
        define: {
            'import.meta.env.DEV': mode === 'development'
        },
        plugins: [
            vue()
        ],
    }
})