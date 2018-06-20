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
import axios from 'axios';

// import './style/commonStyle.scss'
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件

// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.component('v-table-operation',{
  template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
        </span>`,
  props:{
    rowData:{
      type:Object
    },
    field:{
      type:String
    },
    index:{
      type:Number
    }
  },
  methods:{
    update(){

      // 参数根据业务场景随意构造
      let params = {type:'edit',index:this.index,rowData:this.rowData};
      this.$emit('on-custom-comp',params);
    },

    deleteRow(){

      // 参数根据业务场景随意构造
      let params = {type:'delete',index:this.index};
      this.$emit('on-custom-comp',params);

    }
  }
})

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
require('./mock.js');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
