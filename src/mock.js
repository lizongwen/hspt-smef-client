// 引入mockjs
const Mock = require('mockjs');
// import _ from 'lodash';
// import demoJson from '@/json/demo.json';//仓库管理JSON
// import companyMenu from '@/json/companyMenu.json';
import api from './utils/api';

import loginData from '@/json/login.json';//登录接口
import findByLoginName from '@/json/findByLoginName.json';
import findDeptByIdData from '@/json/findDeptById.json';
import findAllProjectMemberData from '@/json/findAllProjectMember.json';
import projectData from '@/json/projectData.json';

import projDetailData from '@/json/projDetail.json';
import versionData from '@/json/version.json';
import fspjData from '@/json/fspj.json';
import gsxxData from '@/json/gsxx.json';
import lsygData from '@/json/lsyg.json';

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

//判断token有效无效

Mock.mock('/hspt-web-api/verifyToken', 'post', function (req) {
	return {
		"resultCode": "0",
		"resultMsg": "成功(0000)"
	};
});

//查询职位
Mock.mock(api.findByLoginName, 'post', function (req) {
	return findByLoginName;
});
//查询部门
Mock.mock(api.findDept, 'post', function (req) {
	return findDeptByIdData;
});

//查询部门成员
Mock.mock(api.findAllProjectMember, 'post', function (req) {
	return findAllProjectMemberData;
});


//查询所有项目
Mock.mock('/hspt-web-api/project/list', 'post', function (req) {
	return projectData;
});

//查询项目详情
Mock.mock('/hspt-web-api/project/detail', 'post', function (req) {
	return projDetailData;
});
//获取版本信息
Mock.mock(api.getVersion, 'post', function (req) {
	return versionData;
});


//获取资信分数及惠国评级

Mock.mock('/hspt-web-api/project/fspj', 'post', function (req) {
	return fspjData;
});

//获取公司基本信息
Mock.mock("/hspt-web-api/data_entry/qyjbxx/gsjbxx/list", 'post', function (req) {
	return gsxxData;
});


Mock.mock(api.genReport, 'post', function (req) {
	return {};
});



//获取历史沿革
Mock.mock('/hspt-web-api/data_entry/qyjbxx/lsyg', 'post', function (req) {
	return lsygData;
});