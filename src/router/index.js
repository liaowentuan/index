import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'

// 实时预览
import realTime from '@/components/realTime/realTime'

// 通行记录
import traffic from '@/components/traffic'

// 统计数据
import statistics from '@/components/statistics'

// 人员管理
import personnel from '@/components/personnel'

// 审核管理
import auditing from '@/components/auditing'

// 放行管理
import release from '@/components/release/release'
import first from '@/components/release/first'
import second from '@/components/release/second'
import third from '@/components/release/third'

// 系统管理
import sysModule from '@/components/sysModule'

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
    redirect: '/home/realTime',
    children: [
      {
        path: '/home/realTime',
        component: realTime
      },
      {
        path: '/home/traffic',
        component: traffic
      },
      {
        path: '/home/statistics',
        component: statistics
      },
      {
        path: '/home/personnel',
        component: personnel
      },
      {
        path: '/home/auditing',
        component: auditing
      },
      {
        path: '/home/release',
        component: release,
        redirect: '/home/release/first',
        children: [
          {
            path: '/home/release/first',
            component: first
          },
          {
            path: '/home/release/second',
            component: second
          },
          {
            path: '/home/release/third',
            component: third
          }
        ]
      },
      {
        path: '/home/sysModule',
        component: sysModule
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
