import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router'
// 静态路由
import { staticRoutes } from './static'
// 动态路由
import { dynamicRoutes } from './dynamic'
// 合并路由
const routes: RouteRecordRaw[] = [...staticRoutes, ...dynamicRoutes]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
