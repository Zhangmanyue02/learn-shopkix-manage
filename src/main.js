import { createApp } from 'vue'
import App from './App.vue'
console.log(App);

const app = createApp(App)
console.log(app);
// 使用 document.getElementById 确保能正确获取挂载点并挂载应用
app.mount(document.getElementById("app"))

