import { RouteRecordRaw } from 'vue-router'

import { loginRoutes } from './modules/login'
import { aboutRoutes } from './modules/about'

export const dynamicRoutes: RouteRecordRaw[] = [...loginRoutes, ...aboutRoutes]
