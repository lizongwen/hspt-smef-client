// 引入mockjs
const Mock = require('mockjs');
import _ from 'lodash';
import demoJson from '@/json/demo.json';//仓库管理JSON

// 获取 mock.Random 对象
// const Random = Mock.Random;
// mock一组数据
const DemoJson = function (req) {
	let res=demoJson
	return res;
};


Mock.mock('/api/getDemoJson', 'post', DemoJson);

