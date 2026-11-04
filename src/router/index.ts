import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agents',
      name: 'agents',
      component: () => import('../views/AgentsView.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      redirect: '/#engineering',
    },
    {
      path: '/agent/:id',
      name: 'agent',
      component: () => import('../views/AgentView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/work/:id',
      redirect: (to) => ({ name: 'project', params: { id: to.params.id } }),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
  async scrollBehavior(to, _from, savedPosition) {
    await nextTick()
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
    if (savedPosition) return savedPosition
    if (to.hash) {
      const target = document.getElementById(to.hash.slice(1))
      if (target) {
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80
        return {
          top: target.getBoundingClientRect().top + window.scrollY - headerHeight - 16,
          behavior: 'instant',
        }
      }
    }
    return { top: 0 }
  },
})

export default router
