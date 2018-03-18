import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import pythonLearning from '@/components/pythonlearning/pythonlearning'
import vueCliLearning from '@/components/vueCliLearning/vueCliLearning'

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
    redirect: '/home/pythonLearning',
    children: [
      {
        path: '/home/pythonLearning',
        component: pythonLearning
      },
      {
        path: '/home/vueCliLearning',
        component: vueCliLearning
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
