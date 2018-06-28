export default {
	login: '/hspt-web-api/login', // 登录
	findByLoginName: '/hspt-web-api/user/findByLoginName',//查询职位
	findDept: '/hspt-web-api/dept/findDeptById',//查询用户部门
	findAllProjectMember: '/hspt-web-api/user/findAllProjectMember',//查询部门成员
	getVersion: "/hspt-web-api/version/list",//获取版本列表

	genReport:'/hspt-web-api/report/onlineEdit/doc/open'//信用报告生成触发
}
