import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login'
import home from '@/components/home'

import vueDocs from '@/components/vue/vueDocs'
import vueInit from '@/components/vue/vueInit'
import vuePackage from '@/components/vue/vuePackage'
import vueUse from '@/components/vue/vueUse'
import vueProxy from '@/components/vue/vueProxy'
import vueBuild from '@/components/vue/vueBuild'

import git from '@/components/git/git'

import python from '@/components/python/python'

import nginx from '@/components/nginx/nginx'

Vue.use(Router)

let routes = [
  /* {
    path: '/login',
    name: 'login',
    component: login
  }, */
  {
    path: '/home',
    name: 'home',
    component: home,
    redirect: '/home/vue',
    children: [
      {
        path: '/home/vue',
        component: vueDocs,
        redirect: '/home/vue/init',
        children: [
          {
            path: '/home/vue/init',
            component: vueInit
          },
          {
            path: '/home/vue/package',
            component: vuePackage
          },
          {
            path: '/home/vue/use',
            component: vueUse
          },
          {
            path: '/home/vue/proxy',
            component: vueProxy
          },
          {
            path: '/home/vue/build',
            component: vueBuild
          }
        ]
      },
      {
        path: '/home/git',
        component: git
      },
      {
        path: '/home/python',
        component: python
      },
      {
        path: '/home/nginx',
        component: nginx
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
    from.name ? next({ name: from.name }) : next('/home')
  } else {
    next()
  }
})

export default router
