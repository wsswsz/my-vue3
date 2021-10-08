import { createRouter, createWebHashHistory} from "vue-router"

export const routes = [
  {
    path: "/",
    redirect: "/layouts/home",
  },
  {
    path: "/layouts",
    name: "Layouts",
    meta: {
      icon: "el-icon-location",
      title: "导航"
    },
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        meta: {
          icon: "el-icon-s-home",
          title: "首页"
        },
        component: () => import("comps/Home.vue"),
      },
      {
        path: "help",
        name: "Help",
        meta: {
          icon: "el-icon-s-help",
          title: "帮助"
        },
        component: () => import("comps/Help.vue"),
      },
      {
        path: "test",
        name: "Test",
        meta: {
          icon: "el-icon-s-home",
          title: "测试"
        },
        component: () => import("comps/test.vue"),
        children: [
          {
            path: "test1",
            name: "Test1",
            meta: {
              icon: "el-icon-s-home",
              title: "测试1"
            },
            component: () => import("comps/test1.vue"),
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router