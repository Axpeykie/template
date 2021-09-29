import { RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]
