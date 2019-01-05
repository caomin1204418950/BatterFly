export default {
	ResourceItems: [
		{ name: '应用管理-添加', state: 'post/app', type: 'button' },
		{ name: '应用管理-查询', state: 'get/appDataGrid', type: 'button' },
		{ name: '应用管理-编辑', state: 'put/app', type: 'button' },
		{ name: '应用管理-状态', state: 'patch/app/status', type: 'button', url: '' },
		{ name: '部门管理-添加', state: 'post/department', type: 'button' },
		{ name: '部门管理-编辑', state: 'put/department', type: 'button' },
		{ name: '部门管理-添加子部门', state: 'post/department/child', type: 'button' },
		{ name: '部门管理-状态', state: 'patch/department/status', type: 'button' },
		{ name: '员工管理-查询', state: 'get/users/grid', type: 'button' },
		{ name: '员工管理-添加', state: 'post/user', type: 'button' },
		{ name: '员工管理-查看', state: 'get/user/id', type: 'button' },
		{ name: '员工管理-角色指派', state: 'post/user/id/role', type: 'button' },
		{ name: '员工管理-编辑', state: 'put/user/id', type: 'button' },
		{ name: '员工管理-数据权限指派', state: 'post/user/id/area', type: 'button' },
		{ name: '员工管理-重置密码', state: 'patch/user/resetpass', type: 'button' },
		{ name: '员工管理-状态', state: 'patch/user/status', type: 'button' },
		{ name: '权限管理-添加权限', state: 'post/permission', type: 'button' },
		{ name: '权限管理-添加子权限', state: 'post/permission/child', type: 'button' },
		{ name: '权限管理-编辑', state: 'put/permission/id', type: 'button' },
		{ name: '权限管理-状态', state: 'patch/permission/status', type: 'button' },
		{ name: '角色管理-查询', state: 'get/roles/grid', type: 'button' },
		{ name: '角色管理-创建角色', state: 'post/role', type: 'button' },
		{ name: '角色管理-角色授权', state: 'post/role/id/permission', type: 'button' },
		{ name: '角色管理-编辑', state: 'put/role/id', type: 'button' },
		{ name: '角色管理-状态', state: 'patch/role/status', type: 'button' },
		{ name: '发布管理-编辑', state: 'post/edit/id', type: 'button' }
	],
	menu: [
		{
			name: '首页统计',
			state: 'home',
			type: 'link',
			icon: 'icon iconfont icon-home',
			url: '/home'
		},
		// {
		// 	name: '应用管理',
		// 	state: 'application',
		// 	type: 'link',
		// 	icon: 'icon iconfont icon-application',
		// 	url: '/application'
		// },
		
		// {
		// 	name: '创客管理',
		// 	state: 'orgization',
		// 	type: 'sub',
		// 	icon: 'icon iconfont icon-organization',
		// 	children: [
		// 		// { name: '部门管理', type: 'link', icon: 'feather icon-menu', url: '/organization/department' },
		// 		{ name: '人员管理', type: 'link', icon: 'feather icon-menu', url: '/organization/department' },
		// 		{ name: '分组管理', type: 'link', icon: 'feather icon-menu', url: '/organization/employee' },
		// 	]
		// },
		{
			name: '创客管理',
			state: 'maker',
			type: 'sub',
			icon: 'icon iconfont icon-organization',
			url:'',
			children: [
				{ name: '人员管理', type: 'link', icon: 'feather icon-menu', url: '/maker/makerperson' },
				{ name: '分组管理', type: 'link', icon: 'feather icon-menu', url: '/maker/makergroup' }
			]
		},
		{
			name:'合伙管理人',
			state:'partner',
			type:'sub',
			icon: 'icon iconfont icon-role',
			children:[
				{ name: '申请管理', type: 'link', icon: 'feather icon-menu', url: '/partner/partnerapply' },
				{ name: '人员管理', type: 'link', icon: 'feather icon-menu', url: '/partner/partnerperson' },
				{ name: '等级管理', type: 'link', icon: 'feather icon-menu', url: '/partner/partnergrade' },				
			]
		}
		// {
		// 	name:'客户管理',
		// 	state:'customer',
		// 	type:'sub',
		// 	icon: 'icon iconfont icon-role',
		// 	children:[
		// 		{ name: '账号管理', type: 'link', icon: 'feather icon-menu', url: '/customer/account' },
		// 		{ name: '企业管理', type: 'link', icon: 'feather icon-menu', url: '/customer/enterprise' }			
		// 	]
		// },
		// { name: '订单管理', state: 'order', type: 'link', icon: 'icon iconfont icon-log', url: '/order' },
		
		// {
		// 	name: '角色权限',
		// 	state: 'role',
		// 	type: 'sub',
		// 	icon: 'icon iconfont icon-role',
		// 	url: '',
		// 	children: [
		// 		{ name: '权限管理', type: 'link', icon: 'feather icon-menu', url: '/role/authority' },
		// 		{ name: '角色管理', type: 'link', icon: 'feather icon-menu', url: '/role/role-manage' }
		// 	]
		// },
		// {
		// 	state: 'baseResource',
		// 	short_label: 'W',
		// 	name: '基础资源管理',
		// 	type: 'sub',
		// 	icon: 'icon-baseResource',
		// 	children: [
		// 	  {
		// 		state: 'industry',
		// 		name: '行业信息管理',
		// 		url: '/baseResource/industry'
		// 	  },
		// 	  {
		// 		state: 'area',
		// 		name: '行政区划管理',
		// 		url: '/baseResource/area'
		// 	  },
		// 	  {
		// 		state: 'dictionary',
		// 		name: '字典管理',
		// 		url: '/baseResource/dictionary'
		// 	  }
		// 	]
		//   },
		// { name: '注册会员管理', state: 'member', type: 'link', icon: 'icon iconfont icon-log', url: '/member' },
		// {
		// 	name: '文章发布管理',
		// 	state: 'article',
		// 	type: 'sub',
		// 	icon: 'icon iconfont icon-read',
		// 	url: '',
		// 	children: [
		// 		{ name: '资源管理', type: 'link', icon: 'feather icon-menu', url: '/article/resource' },
		// 		{ name: '发布管理', type: 'link', icon: 'feather icon-menu', url: '/article/publish' }
		// 	]
		// },
		// { name: '日志管理', state: 'log', type: 'link', icon: 'icon iconfont icon-log', url: '/log' }
		
	]
}