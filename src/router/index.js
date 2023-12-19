import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bus',
    name: 'bus.index',
    component: () => import('../views/bus/ListBus.vue')
  },
  {
    path: '/bus/create',
    name: 'bus.create',
    component: () => import('../views/bus/AddBus.vue')
  },
  {
    path: '/bus/:id/edit',
    name: 'bus.edit',
    component: () => import('../views/bus/EditBus.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
