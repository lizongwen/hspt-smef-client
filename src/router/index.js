import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '云信平台 - 登录'
      },
      component: () => import('@/page/login.vue')
    },
    {
      path: '/login',
      name: '_login',
      meta: {
        title: '云信平台 - 登录'
      },
      component: () => import('@/page/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/home',
      meta: {
        title: '云信平台'
      },
      component: () => import('@/components/layout.vue'),
      children: [{
        path: '/home',
        name: 'home',
        meta: {
          title: '云信平台'
        },
        component: () => import('@/page/home.vue')
      },
        {
          path: '/project',
          name: 'project',
          meta: {
            title: '云信平台'
          },
          component: () => import('@/page/project/project.vue')
        },
        {
          path: '/company',
          name: 'company',
          meta: {
            title: '云信平台 - 企业填报'
          },
          component: () => import('@/page/company/index.vue'),
          children: [
            {
              path: 'base/index',//工商基本信息
              name: 'base_index',
              component: () => import('@/page/company/base/index.vue')
            },
            {
              path: 'base/history',//公司历史信息
              name: 'history',
              component: () => import('@/page/company/base/history.vue')
            },
            {
              path: 'resource/test1',
              name: 'test1',
              component: () => import('@/page/company/resource/test1.vue')
            },
            {
              path: 'resource/test2',
              name: 'test2',
              component: () => import('@/page/company/resource/test2.vue')
            },
            {
              path: 'credit/test1',
              name: 'credit1',
              component: () => import('@/page/company/credit/test1.vue')
            },
            {
              path: 'credit/test2',
              name: 'credit2',
              component: () => import('@/page/company/credit/test2.vue')
            },
            {
              path: 'business',
              name: 'business',
              component: () => import('@/page/company/business/business.vue')
            },
            {
              path: 'finance',
              name: 'finance',
              component: () => import('@/page/company/finance/finance.vue')
            },
            {
              path: 'risk',
              name: 'risk',
              component: () => import('@/page/company/risk/risk.vue')
            },
            {
              path: 'business',
              name: 'business',
              component: () => import('@/page/company/business/business.vue')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/components/p404.vue')
    }
  ]
})
