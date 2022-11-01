import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserDetails from '../views/UserDetails.vue'
import UsersList from '../views/UsersList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'usersList',
    component: UsersList
  },
  {
    path: '/:username',
    name: 'userDetails',
    component: UserDetails
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
