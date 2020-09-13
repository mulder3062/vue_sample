import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/components/HelloWorld')
      },
      {
        path: 'Contacts',
        component: () => import('@/views/Contacts/Contacts')
      },{
        path: 'Settings',
        component: () => import('@/views/Settings/Settings')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
