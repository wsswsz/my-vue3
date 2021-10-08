import { createApp } from "vue"
import App from "./App.vue"

// 路由
import router from "@/router/index.ts"

// 状态管理
import { store } from "@/store/index.ts"

// scss
import "scss/index.scss"

// element-ui全局引入
// import ElementPlus fro../node_modules/_element-plus@1.0.2-beta.70@element-plus/liblus";
// import "element-plus/lib/theme-chalk/index.css";
// 按需引入，文件单独提取为elementPlus.ts
import ElementPlus from "plugins/elementPlus.ts"

createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.mount("#app")
