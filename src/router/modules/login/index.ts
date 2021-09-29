import { RouteRecordRaw } from 'vue-router'

export const loginRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]
