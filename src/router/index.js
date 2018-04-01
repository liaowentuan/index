import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login'
const home = () => import('@/components/home')

const git = () => import('@/components/git/git')
const reset = () => import('@/components/git/reset')

const python = () => import('@/components/python/python')
const postgresql = () => import('@/components/python/postgresql')
const postgresqlCore = () => import('@/components/python/postgresqlCore')

const nginx = () => import('@/components/nginx/nginx')
const wechatHttp = () => import('@/components/nginx/wechat_http')
const wechatHttps = () => import('@/components/nginx/wechat_https')

const vueDocs = () => import('@/components/vue/vueDocs')
const vueInit = () => import('@/components/vue/vueInit')
const vuePackage = () => import('@/components/vue/vuePackage')
const vueUse = () => import('@/components/vue/vueUse')
const vueProxy = () => import('@/components/vue/vueProxy')
const vueBuild = () => import('@/components/vue/vueBuild')
const vueLayout = () => import('@/components/vue/vueLayout')

const Django = () => import('@/components/Django/Django')
const DjangoInstall = () => import('@/components/Django/DjangoInstall')

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
          },
          {
            path: '/home/vue/layout',
            component: vueLayout
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
        path: '/home/Django',
        component: Django,
        redirect: '/home/Django/install',
        children: [
          {
            component: DjangoInstall,
            path: '/home/Django/install'
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
