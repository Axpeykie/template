import { RouteRecordRaw } from 'vue-router'

export const aboutRoutes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  }
]
