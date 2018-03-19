import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'

import vueCliLearning from '@/components/vueCliLearning/vueCliLearning'
import vueCliInit from '@/components/vueCliLearning/vueCliInit'
import npmBuild from '@/components/vueCliLearning/npmBuild'
import vuexDemo from '@/components/vueCliLearning/vuexDemo'
import routerDemo from '@/components/vueCliLearning/routerDemo'

import pythonLearning from '@/components/pythonlearning/pythonlearning'

Vue.use(Router)

let routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    component: home,
    redirect: '/home/vueCliLearning/init',
    children: [
      {
        path: '/home/vueCliLearning',
        component: vueCliLearning,
        redirect: '/home/vueCliLearning/init',
        children: [
          {path: '/home/vueCliLearning/init', component: vueCliInit},
          {path: '/home/vueCliLearning/npmBuild', component: npmBuild},
          {path: '/home/vueCliLearning/vuex', component: vuexDemo},
          {path: '/home/vueCliLearning/router', component: routerDemo}
        ]
      },
      {
        path: '/home/pythonLearning',
        component: pythonLearning
      }
    ]
  }
]

const router = new Router({
  history: true,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/login')
  } else {
    next()
  }
})

export default router
