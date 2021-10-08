// element-ui全局引入
import ElementPlus from "element-plus";
// import zhCn from 'element-plus/es/locale/lang/zh-cn'// 这里配置语言不生效，直接在App.vue用ConfigProvider组件
import "element-plus/lib/theme-chalk/index.css"; 

// 按需引入
// import { ElButton, ElInput } from "element-plus";
// import "element-plus/lib/theme-chalk/base.css"
// import "element-plus/lib/theme-chalk/el-button.css"
// import "element-plus/lib/theme-chalk/el-input.css"

export default function (app:Element) {
  app.use(ElementPlus)
  // app.use(ElButton)
  // app.use(ElInput)
}