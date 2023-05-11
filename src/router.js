import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'

const { isAuthenticated } = useAuth()
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/Subaru', name: 'Subaru', component: () => import('@/views/Subaru.vue') },
  { path: '/Mustang', name: 'Mustang', component: () => import('@/views/Mustang.vue') },
  { path: '/Camaro', name: 'Camaro', component: () => import('@/views/Camaro.vue') },
  { path: '/Altima', name: 'Altima', component: () => import('@/views/Altima.vue') },
  { path: '/Civic', name: 'Civic', component: () => import('@/views/Civic.vue') },
  { path: '/Audi', name: 'Audi', component: () => import('@/views/Audi.vue') },
  { path: '/Lincoln', name: 'Lincoln', component: () => import('@/views/Lincoln.vue') },
  { path: '/Jaguar', name: 'Jaguar', component: () => import('@/views/Jaguar.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
