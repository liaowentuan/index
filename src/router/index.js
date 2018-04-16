import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login'

import home from '@/components/home'

import git from '@/components/git/git'
import reset from '@/components/git/reset'

import python from '@/components/python/python'
import postgresql from '@/components/python/postgresql'
import postgresqlCore from '@/components/python/postgresqlCore'
import getopt from '@/components/python/getopt'
import pythonScript from '@/components/python/pythonScript'

import pythonBase from '@/components/python/pythonBase/pythonBase'
import pythonType from '@/components/python/pythonBase/pythonType'
import pythonVariable from '@/components/python/pythonBase/pythonVariable'
import pythonFormat from '@/components/python/pythonBase/pythonFormat'
import pythonConversion from '@/components/python/pythonBase/pythonConversion'
import pythonLoop from '@/components/python/pythonBase/pythonLoop'

import nginx from '@/components/nginx/nginx'
import wechatHttp from '@/components/nginx/wechat_http'
import wechatHttps from '@/components/nginx/wechat_https'

import vueDocs from '@/components/vue/vueDocs'
import vueInit from '@/components/vue/vueInit'
import vuePackage from '@/components/vue/vuePackage'
import vueUse from '@/components/vue/vueUse'
import vueProxy from '@/components/vue/vueProxy'
import vueBuild from '@/components/vue/vueBuild'
import vueLayout from '@/components/vue/vueLayout'
import svg from '@/components/vue/psSVG'
import skin from '@/components/vue/skin'

import Django from '@/components/Django/Django'
import DjangoInstall from '@/components/Django/DjangoInstall'
import DjangoVirtualenv from '@/components/Django/DjangoVirtualenv'

import js from '@/components/js/js'
import deepCopy from '@/components/js/deepCopy'

import linux from '@/components/linux-ubuntu/linuxUbuntu'
import tar from '@/components/linux-ubuntu/tar'

/* const home = () => import('@/components/home')

const git = () => import('@/components/git/git')
const reset = () => import('@/components/git/reset')

const python = () => import('@/components/python/python')
const postgresql = () => import('@/components/python/postgresql')
const postgresqlCore = () => import('@/components/python/postgresqlCore')

const nginx = () => import(/!* webpackChunkName: "group-nginx" *!/ '@/components/nginx/nginx')
const wechatHttp = () => import(/!* webpackChunkName: "group-nginx" *!/'@/components/nginx/wechat_http')
const wechatHttps = () => import(/!* webpackChunkName: "group-nginx" *!/'@/components/nginx/wechat_https')

const vueDocs = () => import('@/components/vue/vueDocs')
const vueInit = () => import('@/components/vue/vueInit')
const vuePackage = () => import('@/components/vue/vuePackage')
const vueUse = () => import('@/components/vue/vueUse')
const vueProxy = () => import('@/components/vue/vueProxy')
const vueBuild = () => import('@/components/vue/vueBuild')
const vueLayout = () => import('@/components/vue/vueLayout')

const Django = () => import('@/components/Django/Django')
const DjangoInstall = () => import('@/components/Django/DjangoInstall')

const js = () => import('@/components/js/js')
const deepCopy = () => import('@/components/js/deepCopy') */

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
          },
          {
            path: '/home/vue/ps',
            component: svg
          },
          {
            path: '/home/vue/skin',
            component: skin
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
          },
          {
            component: DjangoVirtualenv,
            path: '/home/Django/virtualenv'
          }
        ]
      },
      {
        path: '/home/python',
        component: python,
        redirect: '/home/python/postgresql',
        children: [
          {
            component: pythonBase,
            path: '/home/python/pythonbase',
            redirect: '/home/python/pythonBase/variable',
            children: [
              {
                component: pythonVariable,
                path: '/home/python/pythonBase/variable'
              },
              {
                component: pythonType,
                path: '/home/python/pythonBase/pythonType'
              },
              {
                component: pythonFormat,
                path: '/home/python/pythonBase/Format'
              },
              {
                component: pythonConversion,
                path: '/home/python/pythonBase/conversion'
              },
              {
                component: pythonLoop,
                path: '/home/python/pythonBase/loop'
              }
            ]
          },
          /* ,
          {
            component: postgresql,
            path: '/home/python/postgresql',
            redirect: '/home/python/postgresql',
            children: [
              {
                component: pythonVariable,
                path: '/home/python/postgresql/pythonVariable'
              }
            ]
          } */
          {
            component: postgresql,
            path: '/home/python/postgresql'
          },
          {
            component: postgresqlCore,
            path: '/home/python/postgresqlCore'
          },
          {
            component: getopt,
            path: '/home/python/getopt'
          },
          {
            component: pythonScript,
            path: '/home/python/pythonScript'
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
      },
      {
        path: '/home/js',
        component: js,
        redirect: '/home/js/deepCopy',
        children: [
          {
            component: deepCopy,
            path: '/home/js/deepCopy'
          }
        ]
      },
      {
        path: '/home/linux',
        component: linux,
        redirect: '/home/linux/tar',
        children: [
          {
            component: tar,
            path: '/home/linux/tar'
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
  if (to['redirectedFrom']) { // 防止一级路由混乱
    let str = new RegExp(to['redirectedFrom'])
    if (str.test(from['fullPath']) === true) {
      return
    }
  }
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/home')
  } else {
    next()
  }
})

export default router
