import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import actas from '../views/actas.vue';
import App from '@/App.vue';

const routes = [
  {
    path: '/src/views/LoginView.vue', component: LoginView,
  },{
    path: '/src/views/actas.vue', component: actas,
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      name: 'actas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      component: () => import('@/views/actas.vue')
    }
  ]
})

export default router
