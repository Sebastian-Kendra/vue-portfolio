import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectView from '../views/ProjectView.vue'
import ListView from '../views/list/views/ListView.vue'
import TunesView from '../views/hudba/views/TunesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/projects/',
    name: 'projects',
    component: ProjectView,
  },
  {
    path: '/projects/list',
    name: 'list',
    component: ListView,
  },
  {
    path: '/projects/tunes',
    name: 'tunes',
    component: TunesView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
