import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import JobDetails from './views/JobDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/job/:id', name: 'JobDetails', component: JobDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
