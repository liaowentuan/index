import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'

// 实时预览
import realTime from '@/components/realTime/realTime'
// 通行记录
import traffic from '@/components/traffic/traffic'
// 数据统计
import statistics from '@/components/statistics/statistics'
import detail from '@/components/statistics/detail'
import abnormity from '@/components/statistics/abnormity'
import visitor from '@/components/statistics/visitor'
import visitors from '@/components/statistics/visitors'

// 人员管理
import personnel from '@/components/personnel/personnel'
// 审核管理
import auditing from '@/components/auditing/auditing'
import waiting from '@/components/auditing/waiting'
import examined from '@/components/auditing/examined'
import launched from '@/components/auditing/launched'

// 系统管理
import sysModule from '@/components/sysModule/sysModule'
import user from '@/components/sysModule/user'
import equipment from '@/components/sysModule/equipment'
import discern from '@/components/sysModule/discern'
import log from '@/components/sysModule/log'
import storager from '@/components/sysModule/storager'
import FTP from '@/components/sysModule/FTP'
import parameter from '@/components/sysModule/parameter'

// 放行管理
import release from '@/components/release/release'
import leave from '@/components/release/leave'
import accomodate from '@/components/release/accomodate'

Vue.use(Router)

let routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
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
        component: statistics,
        redirect: '/home/statistics/detail',
        children: [
          {
            path: '/home/statistics/detail',
            component: detail
          },
          {
            path: '/home/statistics/abnormity',
            component: abnormity
          },
          {
            path: '/home/statistics/visitor',
            component: visitor
          },
          {
            path: '/home/statistics/visitors',
            component: visitors
          }
        ]
      },
      {
        path: '/home/personnel',
        component: personnel
      },
      {
        path: '/home/auditing',
        component: auditing,
        redirect: '/home/auditing/waiting',
        children: [
          {
            path: '/home/auditing/waiting',
            component: waiting
          },
          {
            path: '/home/auditing/examined',
            component: examined
          },
          {
            path: '/home/auditing/launched',
            component: launched
          }
        ]
      },
      {
        path: '/home/sysModule',
        component: sysModule,
        redirect: '/home/sysModule/user',
        children: [
          {
            path: '/home/sysModule/user',
            component: user
          },
          {
            path: '/home/sysModule/equipment',
            component: equipment
          },
          {
            path: '/home/sysModule/discern',
            component: discern
          },
          {
            path: '/home/sysModule/log',
            component: log
          },
          {
            path: '/home/sysModule/storager',
            component: storager
          },
          {
            path: '/home/sysModule/FTP',
            component: FTP
          },
          {
            path: '/home/sysModule/parameter',
            component: parameter
          }
        ]
      },
      {
        path: '/home/release',
        component: release,
        redirect: '/home/release/leave',
        children: [
          {
            path: '/home/release/leave',
            component: leave
          },
          {
            path: '/home/release/accomodate',
            component: accomodate
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
    from.name ? next({ name: from.name }) : next('/login')
  } else {
    next()
  }
})

export default router
