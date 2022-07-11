import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AsmrView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'asmr',
      component: HomeView
    },
    {
      path: '/meditacion',
      name: 'meditation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MeditationView.vue')
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    }
  ]
})

export default router
