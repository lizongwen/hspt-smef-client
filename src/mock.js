// 引入mockjs
const Mock = require('mockjs');
// import _ from 'lodash';
// import demoJson from '@/json/demo.json';//仓库管理JSON
// import companyMenu from '@/json/companyMenu.json';
import api from './utils/api';
import loginData from '@/json/login.json';
import findByLoginName from '@/json/findByLoginName.json';
import listData from '@/json/list.json';
import findDeptByIdData from '@/json/findDeptById.json';
import findLatestProjectData from '@/json/findLatestProject.json';
import findRoleByLoginNameData from '@/json/findRoleByLoginName.json';



import findAllProjectMemberData from '@/json/findAllProjectMember.json';

// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
// const DemoJson = function (req) {
//   let res = demoJson
//   return res;
// };
//
// const MenuData = function (req) {
//   return companyMenu;
// }
//
// Mock.mock('/api/getDemoJson', 'post', DemoJson);
// Mock.mock('/api/getCompanyMenu', 'get', MenuData);


Mock.mock(api.login, 'post', function (req) {
  return loginData;
});

Mock.mock(api.findByLoginName, 'post', function (req) {
  return findByLoginName;
});

Mock.mock(api.getVersion, 'post', function (req) {
  return listData;
});

Mock.mock(api.findDept, 'post', function (req) {
  return findDeptByIdData;
});

Mock.mock(api.findLatestProject, 'post', function (req) {
  return findLatestProjectData;
});

Mock.mock(api.projectList, 'post', function (req) {
  return findRoleByLoginNameData;
});

Mock.mock(api.findAllProjectMember, 'post', function (req) {
  return findAllProjectMemberData;
});
