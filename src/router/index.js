import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'
import { store } from '@/store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes]
})

// check login
// router.beforeEach((to, from, next) => {
//   if () {
//     router.push()
//     return next('/')
//   }
//   return next()
// })

export default router
