import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
	  name: 'login',
	  meta:{
		title:'云信平台 - 登录'
	  },
      component: ()=>import('@/login.vue')
    }
  ]
})
