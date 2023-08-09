import { createApp } from "vue"; // 导入 Vue 模块中的 createApp 函数
import Antd from "ant-design-vue"; // 导入 ant-design-vue 库
import App from "./App.vue"; // 导入 App.vue 组件
import * as VueRouter from "vue-router"; // 导入 VueRouter 模块
import routes from "./configs/routes"; // 导入路由配置
import { createPinia } from "pinia"; // 导入 pinia 库中的 createPinia 函数
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; // 导入 pinia 插件
import "ant-design-vue/dist/antd.css"; // 导入 ant-design-vue 库的样式
import "./style.css"; // 导入自定义样式

// 创建路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // 创建 hash 模式路由
  routes, // 路由配置
});

// 创建状态管理
const pinia = createPinia(); // 创建 Pinia 应用
pinia.use(piniaPluginPersistedstate); // 使用状态持久化插件

// 创建 Vue 应用，并在应用中使用 ant-design-vue 库、路由、状态管理
createApp(App).use(Antd).use(router).use(pinia).mount("#app");
