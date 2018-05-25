import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

import home from '@/components/home'

import git from '@/components/git/git'
import reset from '@/components/git/reset'
import force from '@/components/git/forcePush'

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
import pythonString from '@/components/python/pythonBase/pythonString'
import pythonList from '@/components/python/pythonBase/pythonList'
import pythonTuple from '@/components/python/pythonBase/pythonTuple'
import pythonDictionary from '@/components/python/pythonBase/pythonDictionary'
import pythonErgodic from '@/components/python/pythonBase/pythonErgodic'
import pythonOperator from '@/components/python/pythonBase/pythonOperator'

import pythonCore from '@/components/python/pythonCore/pythonCore'
import pythonFunction from '@/components/python/pythonCore/pythonFunction'
import pythonRecursion from '@/components/python/pythonCore/pythonRecursion'
import pythonFile from '@/components/python/pythonCore/file'
import pythonClass from '@/components/python/pythonCore/pythonClass'
import pythonClassFunction from '@/components/python/pythonCore/pythonClassFunction'
import pythonSingleInheritance from '@/components/python/pythonCore/pythonSingleInheritance'
import pythonMultiInherit from '@/components/python/pythonCore/pythonMultiInherit'
import coverParentFunc from '@/components/python/pythonCore/coverParentFunc'

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
import listObj from '@/components/vue/listObject'
import mixin from '@/components/vue/mixin'
import vueDirective from '@/components/vue/vueDirective'
import changeOtherComponent from '@/components/vue/changeOtherComponent'
import vueAuthority from '@/components/vue/vueAuthority'
import vuebaiduMap from '@/components/vue/baiduMap'

import Django from '@/components/Django/Django'
import DjangoInstall from '@/components/Django/DjangoInstall'
import DjangoVirtualenv from '@/components/Django/DjangoVirtualenv'
import DjangoInit from '@/components/Django/init'

import js from '@/components/js/js'
import deepCopy from '@/components/js/deepCopy'

import linux from '@/components/linux-ubuntu/linuxUbuntu'
import tar from '@/components/linux-ubuntu/tar'
import map from '@/components/linux-ubuntu/mapService'
import linuxDelete from '@/components/linux-ubuntu/delete'

import computer from '@/components/computer/computer'
import bootstrapping from '@/components/computer/bootstrapping'

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
  {
    path: '/login',
    name: 'login',
    meta: {role: ['superAdmin', 'web', 'python']},
    component: login
  },
  {
    path: '/home',
    name: 'home',
    meta: {role: ['superAdmin', 'web', 'python']},
    component: home,
    redirect: '/home/vue',
    children: [
      {
        path: '/home/vue',
        component: vueDocs,
        redirect: '/home/vue/init',
        meta: {role: 'web'},
        children: [
          {
            path: '/home/vue/init',
            meta: {role: ['superAdmin', 'web']},
            component: vueInit
          },
          {
            path: '/home/vue/package',
            meta: {role: ['superAdmin', 'web']},
            component: vuePackage
          },
          {
            path: '/home/vue/use',
            meta: {role: ['superAdmin', 'web']},
            component: vueUse
          },
          {
            path: '/home/vue/proxy',
            meta: {role: ['superAdmin', 'web']},
            component: vueProxy
          },
          {
            path: '/home/vue/build',
            meta: {role: ['superAdmin', 'web']},
            component: vueBuild
          },
          {
            path: '/home/vue/layout',
            meta: {role: ['superAdmin', 'web']},
            component: vueLayout
          },
          {
            path: '/home/vue/ps',
            meta: {role: ['superAdmin', 'web']},
            component: svg
          },
          {
            path: '/home/vue/skin',
            meta: {role: ['superAdmin', 'web']},
            component: skin
          },
          {
            path: '/home/vue/listObj',
            meta: {role: ['superAdmin', 'web']},
            component: listObj
          },
          {
            path: '/home/vue/mixin',
            meta: {role: ['superAdmin', 'web']},
            component: mixin
          },
          {
            path: '/home/vue/directive',
            meta: {role: ['superAdmin', 'web']},
            component: vueDirective
          },
          {
            path: '/home/vue/COC',
            meta: {role: ['superAdmin', 'web']},
            component: changeOtherComponent
          },
          {
            component: vueAuthority,
            path: '/home/vue/vueAuthority',
            meta: {role: ['superAdmin', 'web']}
          },
          {
            component: vuebaiduMap,
            path: '/home/vue/baiduMap',
            meta: {role: ['superAdmin', 'web']}
          }
        ]
      },
      {
        path: '/home/git',
        component: git,
        redirect: '/home/git/reset',
        meta: {role: ['superAdmin', 'web']},
        children: [
          {
            component: reset,
            meta: {role: ['superAdmin', 'web']},
            path: '/home/git/reset'
          },
          {
            component: force,
            meta: {role: ['superAdmin', 'web']},
            path: '/home/git/force'
          }
        ]
      },
      {
        path: '/home/Django',
        component: Django,
        meta: {role: ['superAdmin', 'python']},
        redirect: '/home/Django/install',
        children: [
          {
            component: DjangoInstall,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/Django/install'
          },
          {
            component: DjangoVirtualenv,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/Django/virtualenv'
          },
          {
            component: DjangoInit,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/Django/init'
          }
        ]
      },
      {
        path: '/home/python',
        component: python,
        meta: {role: ['superAdmin', 'python']},
        redirect: '/home/python/pythonbase',
        children: [
          {
            component: pythonBase,
            path: '/home/python/pythonbase',
            meta: {role: ['superAdmin', 'python']},
            redirect: '/home/python/pythonBase/variable',
            children: [
              {
                component: pythonVariable,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/variable'
              },
              {
                component: pythonType,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/pythonType'
              },
              {
                component: pythonFormat,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/Format'
              },
              {
                component: pythonConversion,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/conversion'
              },
              {
                component: pythonLoop,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/loop'
              },
              {
                component: pythonString,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/string'
              },
              {
                component: pythonList,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/list'
              },
              {
                component: pythonTuple,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/tuple'
              },
              {
                component: pythonDictionary,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/dictionary'
              },
              {
                component: pythonErgodic,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/ergodic'
              },
              {
                component: pythonOperator,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonBase/operator'
              }
            ]
          },
          {
            component: pythonCore,
            path: '/home/python/pythonCore',
            meta: {role: ['superAdmin', 'python']},
            redirect: '/home/python/pythonCore/function',
            children: [
              {
                component: pythonFunction,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/function'
              },
              {
                component: pythonRecursion,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/recursion'
              },
              {
                component: pythonFile,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/file'
              },
              {
                component: pythonClass,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/class'
              },
              {
                component: pythonClassFunction,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/classFunction'
              },
              {
                component: pythonSingleInheritance,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/singleInheritance'
              },
              {
                component: pythonMultiInherit,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/pythonMultiInherit'
              },
              {
                component: coverParentFunc,
                meta: {role: ['superAdmin', 'python']},
                path: '/home/python/pythonCore/coverParentFunc'
              }
            ]
          },
          {
            component: postgresql,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/python/postgresql'
          },
          {
            component: postgresqlCore,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/python/postgresqlCore'
          },
          {
            component: getopt,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/python/getopt'
          },
          {
            component: pythonScript,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/python/pythonScript'
          }
        ]
      },
      {
        path: '/home/nginx',
        component: nginx,
        meta: {role: ['superAdmin', 'web']},
        redirect: '/home/nginx/http',
        children: [
          {
            component: wechatHttp,
            meta: {role: ['superAdmin', 'web']},
            path: '/home/nginx/http'
          },
          {
            component: wechatHttps,
            meta: {role: ['superAdmin', 'web']},
            path: '/home/nginx/wechat_https'
          }
        ]
      },
      {
        path: '/home/js',
        component: js,
        meta: {role: ['superAdmin', 'web']},
        redirect: '/home/js/deepCopy',
        children: [
          {
            component: deepCopy,
            meta: {role: ['superAdmin', 'web']},
            path: '/home/js/deepCopy'
          }
        ]
      },
      {
        path: '/home/linux',
        component: linux,
        meta: {role: ['superAdmin', 'python']},
        redirect: '/home/linux/tar',
        children: [
          {
            component: tar,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/linux/tar'
          },
          {
            component: map,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/linux/map'
          },
          {
            component: linuxDelete,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/linux/delete'
          }
        ]
      },
      {
        path: '/home/computer',
        component: computer,
        meta: {role: ['superAdmin', 'python']},
        redirect: '/home/computer/bootstrapping',
        children: [
          {
            component: bootstrapping,
            meta: {role: ['superAdmin', 'python']},
            path: '/home/computer/bootstrapping'
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

router.beforeEach((to, from, next) => { // 有权限权限
  if (sessionStorage.getItem('ROLE')) {
    if (to.matched.length === 0) { // 地址栏是 '/'
      from.name ? next({name: from.name}) : next('/login')
    }
    if (to['redirectedFrom']) { // 防止一级路由混乱
      let str = new RegExp(to['redirectedFrom'])
      if (str.test(from['fullPath']) === true) {
        return false
      }
    }
    if (to.meta.role.includes(sessionStorage.getItem('ROLE'))) { // 权限判断
      next()
    } else {
      next(false)
    }
  } else { // 无权限
    if (to.matched.length === 0) {
      from.name ? next({name: from.name}) : next('/login')
    } else {
      next()
    }
  }
})

export default router
