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
require('./mock.js');

// import './style/commonStyle.scss'
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable, VPagination} from 'vue-easytable'
import tableOperation from './components/globalComponent'
// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.use(tableOperation);

// Vue.component('v-table-operation', {
//   template: ` <div>
//     <span v-if="!editingFlag">
//       <a href="" @click.prevent="update(rowData,index)">编辑</a>
//       <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
//     </span>
//     <span v-if="editingFlag">
//     <a href="" @click.stop.prevent="save(rowData,index)">保存</a>
//     <a href="" @click.stop.prevent="cancel(rowData,index)">取消</a>
//     </span>
//   </div>`,
//   props: {
//     rowData: {
//       type: Object
//     },
//     field: {
//       type: String
//     },
//     index: {
//       type: Number
//     }
//   },
//   computed: {
//     editingFlag(){
//       return this.$store.state.company.editingState;
//     }
//   },
//   methods: {
//     update(){
//       let params = {type: 'edit', index: this.index, rowData: this.rowData};
//       this.$emit('on-custom-comp', params);
//     },
//     deleteRow(){
//       let params = {type: 'delete', index: this.index};
//       this.$emit('on-custom-comp', params);
//     },
//     save(){
//       let params = {type: 'save', index: this.index, rowData: this.rowData};
//       this.$emit('on-custom-comp', params);
//     },
//     cancel(){
//       let params = {type: 'cancel', index: this.index, rowData: this.rowData};
//       this.$emit('on-custom-comp', params);
//     }
//   }
// })
//--end----------vue-easytable所使用的组件

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
