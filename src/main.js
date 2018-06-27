// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/icon/iconfont.css';
import './style/base.css';
import './style/common.scss';
import App from './App';
import router from './router';
// import axios from 'axios';
// import Qs from 'qs';
import http from './utils/http';
import api from './utils/api';

// 引入mock.js
// require('./mock.js');

// import './style/commonStyle.scss'
// 使用vue-easytable组件
import 'vue-easytable/libs/themes-base/index.css'
import {VTable} from 'vue-easytable'
Vue.component(VTable.name, VTable)

// import tableOperation from './components/globalComponent'
//全局注册table操作列组件
// Vue.use(tableOperation);

// 解决点击“版本切换”后侧边栏需要隐藏，和导航后退时把侧边栏设置为可展开的问题。
router.beforeEach((to,from,next)=>{
  // console.log('路由改变');
  // console.log('from:',from);
  if(from.name=='version'){
    store.commit('changeSide',true);
  }
  if(to.name=='version'){
    store.commit('changeSide',false);
  }
  next();
})

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$api = api;
// require('./mock.js');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
