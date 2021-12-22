import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import views from '../views/index.vue'
import unity from '../views/unity/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/unity/test',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/unity',
        name: 'unity',
        redirect: '/unity/test',
        meta: { title: 'unity', icon: '', permission: ['unity'] },
        component: views,
        children: [
          {
            path: '/unity/test',
            name: 'unityTest',
            meta: { title: '测试', icon: '', permission: ['unityTest'] },
            component: unity,
          },
        ],
      },
      {
        path: '/por',
        name: 'por',
        meta: { title: '用户画像', icon: '', permission: ['por'] },
        component: () => import('../views/index.vue'),
        children: [
          {
            path: '/por/test',
            name: 'porData',
            meta: { title: '数据中心', icon: '', permission: ['porData'] },
            component: () => import('../views/por/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '首页', icon: '' },
    component: () => import('../views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
