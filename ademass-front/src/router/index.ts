// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/layouts/default/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
