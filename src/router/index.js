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
    }, {
      path: '/login',
      name: '_login',
      meta: {
        title: '云信平台 - 登录'
      },
      component: () => import('@/page/login.vue')
    }, {
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
      }, {
        path: '/project',
        name: 'project',
        meta: {
          title: '云信平台'
        },
        component: () => import('@/page/project/project.vue')
      }, {
        path: '/company',
        name: 'company',
        meta: {
          title: '云信平台 - 企业填报'
        },
        component: () => import('@/page/company/index.vue'),
        // children: [
        // 	{
        // 		path: 'base',
        // 		name: 'base',
        // 		redirect: 'company/base/index',//重定向到工商基本信息
        children: [
          {
            path: 'index',//工商基本信息
            name: 'base_index',
            component: () => import('@/page/company/base/index.vue')
          },
          {
            path: 'history',//公司历史信息
            name: 'history',
            component: () => import('@/page/company/base/history.vue')
          }
        ]
      }
        , {
          path: 'resource',
          name: 'resource',
          component: () => import('@/page/company/resource/resource.vue')
        }, {
          path: 'credit',
          name: 'credit',
          component: () => import('@/page/company/credit/credit.vue')
        }, {
          path: 'business',
          name: 'business',
          component: () => import('@/page/company/business/business.vue')
        }, {
          path: 'finance',
          name: 'finance',
          component: () => import('@/page/company/finance/finance.vue')
        },
        {
          path: 'risk',
          name: 'risk',
          component: () => import('@/page/company/risk/risk.vue')
        }, {
          path: 'business',
          name: 'business',
          component: () => import('@/page/company/business/business.vue')
        }
      ]
    }]
// },
// ]
})
