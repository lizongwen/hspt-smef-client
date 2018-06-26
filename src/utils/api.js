export default {
	login: '/hspt-web-api/login', // 登录
	findByLoginName: '/hspt-web-api/user/findByLoginName',
	getVersion: "/hspt-web-api/version/list",//获取版本列表
	getBatch: '/hspt-web-api/version/query',//查询版本批次
	findDept: '/hspt-web-api/dept/findDeptById',//查询用户部门
	findLatestProject: '/hspt-web-api/project/list',//倒序排列后的6个项目
	findAllProjectMember: 'hspt-web-api/user/findAllProjectMember',//查询部门成员
	projectList:'hspt-web-api/project/list',
	gsjbxxModify:'hspt-web-api/data_entry/gsjbxx/modify',//工商基本信息
	genReport:'/hspt-web-api/report/onlineEdit/doc/open'//信用报告生成触发
}
