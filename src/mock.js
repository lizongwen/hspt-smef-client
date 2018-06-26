// 引入mockjs
const Mock = require('mockjs');
// import _ from 'lodash';
// import demoJson from '@/json/demo.json';//仓库管理JSON
// import companyMenu from '@/json/companyMenu.json';
import api from './utils/api';
import loginData from '@/json/login.json';//登录接口
import findByLoginName from '@/json/findByLoginName.json';
import projectData from '@/json/projectData.json';
import AlllistData from '@/json/AlllistData.json';
import findDeptByIdData from '@/json/findDeptById.json';

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

//登录接口
Mock.mock(api.login, 'post', function (req) {
	return loginData;
});

//查询职位
Mock.mock(api.findByLoginName, 'post', function (req) {
	return findByLoginName;
});
//查询部门
Mock.mock(api.findDept, 'post', function (req) {
	return findDeptByIdData;
});

//查询所有项目
Mock.mock(api.projectList, 'post', function (req) {
	return projectData;
});

//查询部门成员
Mock.mock(api.findAllProjectMember, 'post', function (req) {
	return findAllProjectMemberData;
});



// Mock.mock(api.getVersion, 'post', function (req) {
// 	return listData;
// });


Mock.mock(api.genReport, 'post', function (req) {
	return {};
});
