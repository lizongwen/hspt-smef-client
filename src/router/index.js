import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			meta: {
				title: '云信平台 - 登录'
			},
			component: () => import('@/page/login.vue')
		}, {
			path: '/login',
			name: '_login',
			meta: {
				title: '云信平台 - 登录'
			},
			component: () => import('@/page/login.vue')
		}, {
			path: '/index',
			name: 'index',
			redirect: '/home',
			meta: {
				title: '云信平台'
			},
			component: () => import('@/components/layout.vue'),
			children: [{
				path: '/home',
				name: 'home',
				meta: {
					title: '云信平台 - 首页'
				},
				component: () => import('@/page/home.vue')
			}, {
				path: '/project',
				name: 'project',
				meta: {
					title: '云信平台 - 项目列表'
				},
				component: () => import('@/page/project/project.vue')
			}, {
				path: '/company',
				name: 'company',
				meta: {
					title: '云信平台 - 企业填报'
				},
				component: () => import('@/page/company/index.vue'),
				children: [
					{
						path: 'gsxx',//工商基本信息
						name: 'gsxx',
						component: () => import('@/page/company/base/gsxx.vue')
					},
					{
						path: 'lsgy',//公司历史信息
						name: 'lsgy',
						component: () => import('@/page/company/base/lsgy.vue')
					},
					{
						path: 'gqjgfz',//股权机构及分支机构
						name: 'gqjgfz',
						component: () => import('@/page/company/base/gqjgfz.vue')
					},
					{
						path: 'ryrz',//公司荣誉与认证
						name: 'ryrz',
						component: () => import('@/page/company/base/ryrz.vue')
					},
					{
						path: 'zscq',//知识产权
						name: 'zscq',
						component: () => import('@/page/company/base/zscq.vue')
					},
					{
						path: 'hbxx',//环保信息
						name: 'hbxx',
						component: () => import('@/page/company/base/hbxx.vue')
					},
					{
						path: 'jyzy',//经营资源
						name: 'jyzy',
						component: () => import('@/page/company/resource/jyzy.vue')
					}, 
					{
						path: 'rlzy',//人力资源
						name: 'rlzy',
						component: () => import('@/page/company/resource/rlzy.vue')
					}, 
					{
						path: 'cpyf',//产品研发
						name: 'cpyf',
						component: () => import('@/page/company/resource/cpyf.vue')
					}, 
					{
						path: 'zbxx',//招标信息
						name: 'zbxx',
						component: () => import('@/page/company/resource/zbxx.vue')
					}, 
					{
						path: 'sbgjj',//社保及公积金
						name: 'sbgjj',
						component: () => import('@/page/company/resource/sbgjj.vue')
					}, 
					{
						path: 'gzxx',//工资发放情况
						name: 'gzxx',
						component: () => import('@/page/company/resource/gzxx.vue')
					}, 
					{
						path: 'gdfrfx',//股东和法人风险信息
						name: 'gdfrfx',
						component: () => import('@/page/company/credit/gdfrfx.vue')
					}, 
					{
						path: 'rzxx',//融资信息
						name: 'rzxx',
						component: () => import('@/page/company/credit/rzxx.vue')
					},
					{
						path: 'dwdb',//对外担保信息
						name: 'dwdb',
						component: () => import('@/page/company/credit/dwdb.vue')
					},
					{
						path: 'sfxx',//司法信息
						name: 'sfxx',
						component: () => import('@/page/company/credit/sfxx.vue')
					},
					{
						path: 'bcxxx',//被非银行机构查询信息
						name: 'bcxxx',
						component: () => import('@/page/company/credit/bcxxx.vue')
					},
					{
						path: 'zyyw',//主要业务介绍
						name: 'zyyw',
						component: () => import('@/page/company/business/zyyw.vue')
					}, 
					{
						path: 'sxyjy',//上下游交易信息
						name: 'sxyjy',
						component: () => import('@/page/company/business/sxyjy.vue')
					}, 
					{
						path: 'hyqs',//行业及市场发展趋势
						name: 'hyqs',
						component: () => import('@/page/company/business/hyqs.vue')
					}, 
					{
						path: 'jzts',//竞争态势和市场机遇
						name: 'jzts',
						component: () => import('@/page/company/business/jzts.vue')
					}, 
					{
						path: 'scfx',//市场风险
						name: 'scfx',
						component: () => import('@/page/company/business/scfx.vue')
					}, 
					{
						path: 'zycwsj',//主要财务数据
						name: 'zycwsj',
						component: () => import('@/page/company/finance/zycwsj.vue')
					},
					{
						path: 'cwnlqs',//财务能力趋势与分析
						name: 'cwnlqs',
						component: () => import('@/page/company/finance/cwnlqs.vue')
					},
					{
						path: 'nsqkfx',//纳税情况与分析
						name: 'nsqkfx',
						component: () => import('@/page/company/finance/nsqkfx.vue')
					},
					{
						path: 'zyjysj',//主要经营数据
						name: 'zyjysj',
						component: () => import('@/page/company/finance/zyjysj.vue')
					},
					{
						path: 'jysjjy',//经营与相关数据校验分析
						name: 'jysjjy',
						component: () => import('@/page/company/finance/jysjjy.vue')
					},
					{
						path: 'cwzkzs',//财务状况综述
						name: 'cwzkzs',
						component: () => import('@/page/company/finance/cwzkzs.vue')
					},
					{
						path: 'cwjgh',//财务结构分化
						name: 'cwjgh',
						component: () => import('@/page/company/finance/cwjgh.vue')
					},
					{
						path: 'tqsjdb',//同期数据对比
						name: 'tqsjdb',
						component: () => import('@/page/company/finance/tqsjdb.vue')
					},
					{
						path: 'zdysjjy',//自定义数据校验
						name: 'zdysjjy',
						component: () => import('@/page/company/finance/zdysjjy.vue')
					},
					{
						path: 'fxxfx',//风险性分析
						name: 'fxxfx',
						component: () => import('@/page/company/risk/fxxfx.vue')
					}
				]
			}]
		},
	]
})
