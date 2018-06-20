// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/icon/iconfont.css';
import './style/base.css';
import './style/common.css';
import App from './App';
import router from './router';
// import axios from 'axios';
// import Qs from 'qs';
import http from './utils/http';
import api from './utils/api';

// import './style/commonStyle.scss'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http=http;
Vue.prototype.$api=api;
// require('./mock.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
