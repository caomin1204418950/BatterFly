import { HttpServe } from './http-serve.service'
import { Injectable } from '@angular/core'

@Injectable()
export class InterfaceService {
	private resourceApiPrefix = '/api/phosphor-sys/v1/resource'
	private phosphorApiPrefix = '/api/phosphor-manage/v1/phosphor'
	constructor(private http: HttpServe) {}
	getUserInfo() {
		return this.http.get(this.resourceApiPrefix + '/user/info')
	}
	updatePassword(userInfo) {
		return this.http.patch(this.resourceApiPrefix + '/user/pass/' + userInfo.account, {
			oldPassword: userInfo.origPwd,
			newPassword: userInfo.newPwd
		})
	}
	/**首页 */
	getUserData(){
		return this.http.get(this.phosphorApiPrefix + '/backstage/user')
	}
	getArticleData(){
		return this.http.get(this.phosphorApiPrefix + '/backstage/article')
	}
	/**应用管理 */
	/**获取应用管理列表 */
	getAppsData(params) {
		return this.http.get(this.resourceApiPrefix + '/appGrid', params)
	}
	getOtherApps() {
		return this.http.get(this.resourceApiPrefix + '/apps/permission')
	}
	getApps() {
		return this.http.get(this.resourceApiPrefix + '/app')
	}
	updateAppStatus(params) {
		return this.http.patch(this.resourceApiPrefix + '/app/' + params.id, params)
	}
	savaApplication(form, type = 'add', id = null) {
		if (type === 'edit') return this.http.put(this.resourceApiPrefix + '/app/' + id, form)
		else return this.http.post(this.resourceApiPrefix + '/app', form)
	}

	/**部门管理 */
	getDepartmentList() {
		return this.http.get(this.resourceApiPrefix + '/department')
	}
	getHierarchicalDepartments() {
		return this.http.get(this.resourceApiPrefix + '/department/status')
	}
	getDepartment(id) {
		return this.http.get(this.resourceApiPrefix + '/department/edit?id=' + id)
	}
	updateDepartment(params) {
		return this.http.patch(this.resourceApiPrefix + '/department/' + params.id, params)
	}
	saveDepartment(form, type = 'add', id = null) {
		if (type === 'edit') return this.http.put(this.resourceApiPrefix + '/department/' + id, form)
		else return this.http.post(this.resourceApiPrefix + '/department', form)
	}

	/**员工管理 */
	usersSearch(params) {
		return this.http.get(this.resourceApiPrefix + '/user', params)
	}
	updateUser(params) {
		return this.http.patch(this.resourceApiPrefix + '/user/' + params.id, params)
	}
	getUserDetail(id) {
		return this.http.get(this.resourceApiPrefix + '/user/' + id)
	}
	resetUserPassword(id) {
		return this.http.patch(this.resourceApiPrefix + '/user/resetpass/' + id, '')
	}
	getUserAreaTree(userId) {
		return this.http.get(this.resourceApiPrefix + '/region/' + userId + 'tree')
	}
	setUserSelectTreeArea(userId, selectedNodesId) {
		return this.http.post(this.resourceApiPrefix + '/user/' + userId + '/area', selectedNodesId)
	}
	getUserRoleAuth(userId) {
		return this.http.get(this.resourceApiPrefix + '/role/user/' + userId)
	}
	appointRoleAuth(userId, roleId) {
		//指派权限
		return this.http.post(this.resourceApiPrefix + '/user/' + userId + '/role', roleId)
	}
	saveUser(id, form) {
		if (id) return this.http.put(this.resourceApiPrefix + '/user/' + id, form)
		else return this.http.put(this.resourceApiPrefix + '/user', form)
	}

	/**权限管理 */
	getPermissionsByAppId(appId) {
		return this.http.get(this.resourceApiPrefix + '/permission?appId=' + appId)
	}
	getPermissionsById(params) {
		return this.http.get(this.resourceApiPrefix + '/permission/edit', params)
	}
	savePermission(form, type = 'add', id = null) {
		if (type === 'edit') return this.http.put(this.resourceApiPrefix + '/permission/' + id, form)
		else return this.http.post(this.resourceApiPrefix + '/permission', form)
	}
	updatePerimission(params) {
		return this.http.patch(this.resourceApiPrefix + '/permission/' + params.id, params)
	}

	/**角色管理 */
	getRoleList(params) {
		return this.http.get(this.resourceApiPrefix + '/rolesGrid', params)
	}
	saveRole(form, type = 'add', id = null) {
		if (type === 'edit') return this.http.put(this.resourceApiPrefix + '/role/' + id, form)
		else return this.http.post(this.resourceApiPrefix + '/role', form)
	}
	getRolePermission(appId, id) {
		return this.http.get(this.resourceApiPrefix + '/role/' + id + '/' + appId + '/permission')
	}
	setRolePermission(roleId, appId, selectedNodesId) {
		return this.http.post(this.resourceApiPrefix + '/role/' + roleId + '/' + appId + '/permission', selectedNodesId)
	}
	updateRole(params) {
		return this.http.patch(this.resourceApiPrefix + '/role/' + params.id, params)
	}

	/**日志管理 */
	getLogList(params) {
		return this.http.get(this.resourceApiPrefix + '/logs', params)
	}
	/**注册会员管理 */
	getMemberList(params) {
		return this.http.get(this.phosphorApiPrefix + '/backstage/userDataGrid', params)
	}
	/**基础资源管理 */
	// getRegionList(params) {
	// 	return this.http.get(this.resourceApiPrefix + '/region', params)
	// }
	// getDictionary(params) {
	// 	return this.http.patch(this.resourceApiPrefix + '/dictionary/'+params.id, params)
	// }
	// getDictionaryItem(params) {
	// 	return this.http.get(this.resourceApiPrefix + '/dictionary/item', params)
	// }
	// postAddDictionary(form) {
	// 	return this.http.post(this.resourceApiPrefix + '/dictionary', form)
	// }
	// getDictionaryList(params) {
	// 	return this.http.get(this.resourceApiPrefix + '/dictionary', params)
	// }
	// getIndustryList(params) {
	// 	return this.http.get(this.resourceApiPrefix + '/industry', params)
	// }
	
	/** 文章发布管理 */
	/**上传 */
	uploadFile(formData: any) {
		return this.http.upload(this.phosphorApiPrefix + '/backstage/articles/upload', formData)
	}
	getArticle(params) {
		return this.http.get(this.phosphorApiPrefix + '/backstage/articles/' + params.id , params)
	}
	/**获取资源管理列表 */
	getOriginalArticleDataGrid (params){
		return this.http.get(this.phosphorApiPrefix + '/backstage/originalArticleDataGrid', params)
	}
	/**加入待发布列表 */
	addOriginalArticle (params){
		return this.http.patch(this.phosphorApiPrefix + '/backstage/originalArticle', params)
	}
	/**获取发布管理列表 */
	getArticlesList (params){
		return this.http.get(this.phosphorApiPrefix + '/backstage/articles', params)
	}
	/**撤回文章 */
	withdrawArticle (params){
		return this.http.patch(this.phosphorApiPrefix + '/backstage/articles/' + params.articlesDetailId + "?status="+params.status, params)
	}
	/**取消定时发布操作 */
	cancelTimeArticle (params){
		return this.http.patch(this.phosphorApiPrefix + '/backstage/articles/job/' + params.articlesDetailId, params)
	}
	/**发布管理--发布/定时发布操作 */
	articleRelease (params){
		return this.http.put(this.phosphorApiPrefix + '/backstage/articles', params)
	}
}
