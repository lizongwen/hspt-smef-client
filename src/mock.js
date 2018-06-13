// 引入mockjs
const Mock = require('mockjs');
import _ from 'lodash';
import demoJson from '@/json/demo.json';//仓库管理JSON
import companyMenu from '@/json/companyMenu.json';

// 获取 mock.Random 对象
// const Random = Mock.Random;
// mock一组数据
const DemoJson = function (req) {
  let res = demoJson
  return res;
};

const MenuData = function (req) {
  return companyMenu;
}

Mock.mock('/api/getDemoJson', 'post', DemoJson);
Mock.mock('/api/getCompanyMenu', 'get', MenuData);

