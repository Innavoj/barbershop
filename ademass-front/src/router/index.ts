// Composables
import { createRouter, createWebHistory } from "vue-router";

//import { useAppStore } from '@/store/app'

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      requiredAuth: true,
    },
    children: [
      /* {
        path: '',
        name: '/#',
        // component: () => import('@/views/HomeView.vue'),
      },*/
    ],
  },
  {
    path: "/equipo",
    component: () => import("@/views/EquipoView.vue"),
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: '',
        name: '/',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    meta: {
      requiredAuth: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiredAuth: false,
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    meta: {
      requiredAuth: false,
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PasswordView.vue"),
  },
  {
    path: "/calendario",
    name: "calendario",
    meta: {
      requiredAuth: true,
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalendarView.vue"),
  },
  {
    path: "/encuesta",
    name: "encuesta",
    meta: {
      requiredAuth: true,
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EncuestaView.vue"),
  },
  {
    path: "/mis-citas",
    name: "miscitas",
    meta: {
      requiredAuth: true,
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MisCitasView.vue"),
  },
  {
    path: "/mi-perfil",
    name: "mi-perfil",
    meta: {
      requiredAuth: true,
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import("@/views/PerfilView.vue")
  },
  {
    path: '/producto',
    name: 'producto',
    meta: {
      requiredAuth: true
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import("@/views/ProductView.vue")
  },
  {
    path: '/servicios',
    name: 'servicios',
    meta: {
      requiredAuth: true
    },
    // route level code-splittingyarn
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import("@/views/ServicesView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*router.beforeEach((to,from,next) => {
  const auth = useAppStore()
  const isAuth = auth.token
  if(!to.meta.requiredAuth && isAuth=== null){
    next({ name: 'register' })
  }else{
    next()
  }
})*/

export default router;
