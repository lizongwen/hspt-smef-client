import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
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
				component: () => import('@/page/dataEnter/home.vue')
			}, {
				path: '/project',
				name: 'project',
				meta: {
					title: '云信平台 - 项目列表'
				},
				component: () => import('@/page/dataEnter/project/project.vue')
			}, {
				path: '/company',
				name: 'company',
				redirect: '/company/home',
				meta: {
					title: '云信平台 - 企业填报'
				},
				component: () => import('@/page/dataEnter/company/index.vue'),
				children: [

					{
						path: 'home',//公司填报主页
						name: 'company_home',
						meta: {
							title: '云信平台 - 企业填报 -首页',
							index:'1'
						},
						component: () => import('@/page/dataEnter/company/home.vue'),
					},
					{
						path: 'base/gsxx',//工商基本信息
						name: 'gsxx',
						meta:{
							index:'1-1'
						},
						component: () => import('@/page/dataEnter/company/base/gsxx.vue')
					},
					{
						path: 'base/lsyg',//公司历史信息
						name: 'lsyg',
						meta:{
							index:'1-2'
						},
						component: () => import('@/page/dataEnter/company/base/lsyg.vue')
					},
					{
						path: 'base/gqjgfz',//股权机构及分支机构
						name: 'gqjgfz',
						meta:{
							index:'1-3'
						},
						component: () => import('@/page/dataEnter/company/base/gqjgfz.vue')
					},
					{
						path: 'base/ryrz',//公司荣誉与认证
						name: 'ryrz',
						meta:{
							index:'1-4'
						},
						component: () => import('@/page/dataEnter/company/base/ryrz.vue')
					},
					{
						path: 'base/zscq',//知识产权
						name: 'zscq',
						meta:{
							index:'1-5'
						},
						component: () => import('@/page/dataEnter/company/base/zscq.vue')
					},
					{
						path: 'base/hbxx',//环保信息
						name: 'hbxx',
						meta:{
							index:'1-6'
						},
						component: () => import('@/page/dataEnter/company/base/hbxx.vue')
					},
					{
						path: 'resource/jyzy',//经营资源
						name: 'jyzy',
						meta:{
							index:'2-1'
						},
						component: () => import('@/page/dataEnter/company/resource/jyzy.vue')
					},
					{
						path: 'resource/rlzy',//人力资源
						name: 'rlzy',
						meta:{
							index:'2-2'
						},
						component: () => import('@/page/dataEnter/company/resource/rlzy.vue')
					},
					{
						path: 'resource/cpyf',//产品研发
						name: 'cpyf',
						meta:{
							index:'2-3'
						},
						component: () => import('@/page/dataEnter/company/resource/cpyf.vue')
					},
					{
						path: 'resource/zbxx',//招标信息
						name: 'zbxx',
						meta:{
							index:'2-4'
						},
						component: () => import('@/page/dataEnter/company/resource/zbxx.vue')
					},
					{
						path: 'resource/sbgjj',//社保及公积金
						name: 'sbgjj',
						meta:{
							index:'2-5'
						},
						component: () => import('@/page/dataEnter/company/resource/sbgjj.vue')
					},
					{
						path: 'resource/gzxx',//工资发放情况
						name: 'gzxx',
						meta:{
							index:'2-6'
						},
						component: () => import('@/page/dataEnter/company/resource/gzxx.vue')
					},
					{
						path: 'credit/gdfrfx',//股东和法人风险信息
						name: 'gdfrfx',
						meta:{
							index:'3-1'
						},
						component: () => import('@/page/dataEnter/company/credit/gdfrfx.vue')
					},
					{
						path: 'credit/rzxx',//融资信息
						name: 'rzxx',
						meta:{
							index:'3-2'
						},
						component: () => import('@/page/dataEnter/company/credit/rzxx.vue')
					},
					{
						path: 'credit/dwdb',//对外担保信息
						name: 'dwdb',
						meta:{
							index:'3-3'
						},
						component: () => import('@/page/dataEnter/company/credit/dwdb.vue')
					},
					{
						path: 'credit/sfxx',//司法信息
						name: 'sfxx',
						meta:{
							index:'3-4'
						},
						component: () => import('@/page/dataEnter/company/credit/sfxx.vue')
					},
					{
						path: 'credit/bcxxx',//被非银行机构查询信息
						name: 'bcxxx',
						meta:{
							index:'3-5'
						},
						component: () => import('@/page/dataEnter/company/credit/bcxxx.vue')
					},
					{
						path: 'business/zyyw',//主要业务介绍
						name: 'zyyw',
						meta:{
							index:'4-1'
						},
						component: () => import('@/page/dataEnter/company/business/zyyw.vue')
					},
					{
						path: 'business/sxyjy',//上下游交易信息
						name: 'sxyjy',
						meta:{
							index:'4-2'
						},
						component: () => import('@/page/dataEnter/company/business/sxyjy.vue')
					},
					{
						path: 'business/hyqs',//行业及市场发展趋势
						name: 'hyqs',
						meta:{
							index:'4-3'
						},
						component: () => import('@/page/dataEnter/company/business/hyqs.vue')
					},
					{
						path: 'business/jzts',//竞争态势和市场机遇
						name: 'jzts',
						meta:{
							index:'4-4'
						},
						component: () => import('@/page/dataEnter/company/business/jzts.vue')
					},
					{
						path: 'business/scfx',//市场风险分析
						name: 'scfx',
						meta:{
							index:'4-5'
						},
						component: () => import('@/page/dataEnter/company/business/scfx.vue')
					},
					{
						path: 'finance/zycwsj',//主要财务数据
						name: 'zycwsj',
						meta:{
							index:'5-1'
						},
						component: () => import('@/page/dataEnter/company/finance/zycwsj.vue')
					},
					{
						path: 'finance/cwnlqs',//财务能力趋势与分析
						name: 'cwnlqs',
						meta:{
							index:'5-2'
						},
						component: () => import('@/page/dataEnter/company/finance/cwnlqs.vue')
					},
					{
						path: 'finance/nsqkfx',//纳税情况与分析
						name: 'nsqkfx',meta:{
							index:'5-3'
						},
						component: () => import('@/page/dataEnter/company/finance/nsqkfx.vue')
					},
					{
						path: 'finance/zyjysj',//主要经营数据
						name: 'zyjysj',
						meta:{
							index:'5-4'
						},
						component: () => import('@/page/dataEnter/company/finance/zyjysj.vue')
					},
					{
						path: 'finance/jysjjy',//经营与相关数据校验分析
						name: 'jysjjy',
						meta:{
							index:'5-5'
						},
						component: () => import('@/page/dataEnter/company/finance/jysjjy.vue')
					},
					{
						path: 'finance/cwzkzs',//财务状况综述
						name: 'cwzkzs',
						meta:{
							index:'5-6'
						},
						component: () => import('@/page/dataEnter/company/finance/cwzkzs.vue')
					},
					{
						path: 'finance/cwjgh',//财务结构分化
						name: 'cwjgh',
						meta:{
							index:'5-7'
						},
						component: () => import('@/page/dataEnter/company/finance/cwjgh.vue')
					},
					{
						path: 'finance/tqsjdb',//同期数据对比
						name: 'tqsjdb',
						meta:{
							index:'5-8'
						},
						component: () => import('@/page/dataEnter/company/finance/tqsjdb.vue')
					},
					{
						path: 'finance/zdysjjy',//自定义数据校验
						name: 'zdysjjy',
						meta:{
							index:'5-9'
						},
						component: () => import('@/page/dataEnter/company/finance/zdysjjy.vue')
					},
					{
						path: 'risk/fxxfx',//风险性分析
						name: 'fxxfx',
						meta:{
							index:'6-1'
						},
						component: () => import('@/page/dataEnter/company/risk/fxxfx.vue')
					}, {
						path: 'version',//版本管理
						name: 'version',
						meta: {
							title: '云信平台 - 企业填报 -版本管理'
						},
						component: () => import('@/page/dataEnter/company/version.vue'),
					}
				]
			}]
		},
		{
			path: '*',
			component: () => import('@/components/p404.vue')
		}
	]
})
