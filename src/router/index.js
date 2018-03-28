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
import reset from '@/components/git/reset'

import python from '@/components/python/python'
import postgresql from '@/components/python/postgresql'
import postgresqlCore from '@/components/python/postgresqlCore'

import nginx from '@/components/nginx/nginx'
import wechatHttp from '@/components/nginx/wechat_http'
import wechatHttps from '@/components/nginx/wechat_https'

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
        component: git,
        redirect: '/home/git/reset',
        children: [
          {
            component: reset,
            path: '/home/git/reset'
          }
        ]
      },
      {
        path: '/home/python',
        component: python,
        redirect: '/home/python/postgresql',
        children: [
          {
            component: postgresql,
            path: '/home/python/postgresql'
          },
          {
            component: postgresqlCore,
            path: '/home/python/postgresqlCore'
          }
        ]
      },
      {
        path: '/home/nginx',
        component: nginx,
        redirect: '/home/nginx/http',
        children: [
          {
            component: wechatHttp,
            path: '/home/nginx/http'
          },
          {
            component: wechatHttps,
            path: '/home/nginx/wechat_https'
          }
        ]
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
