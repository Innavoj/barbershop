// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/layouts/default/Home.vue'
//import { useAppStore } from '@/store/app'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    meta: {
      requiredAuth: true
    },
    children: [
     /* {
        path: '',
        name: '/#',
        component: () => import('@/views/HomeView.vue'),
      },*/
    ],
  },
  {
    path: '/mariana',
    name: 'mariana',
    component: Home,
  },
    {path: '/register',
    name: 'register',
    meta: {
      requiredAuth: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requiredAuth: false
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    meta: {
      requiredAuth: false
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PasswordView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

/*router.beforeEach((to,from,next) => {
  const auth = useAppStore()
  const isAuth = auth.token
  if(!to.meta.requiredAuth && isAuth=== null){
    next({ name: 'register' })
  }else{
    next()
  }
})*/

export default router
