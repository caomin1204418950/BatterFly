import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/do'
// import { HttpInterceptorService } from 'ng-http-interceptor'
import { PopService } from '../pop/pop.service'

@Injectable()
export class HttpServe {
	// api: String = '/api/phosphor-sys'
	headers: Headers
	uploadHeaders: Headers

	constructor(private http: Http, private popService: PopService) {
		
		this.headers = new Headers({
			'Content-Type': 'application/json',
			AUTH_USER: 'admin',
			AUTH_ID: '97a78cc5-2e92-42b8-9a7a-de4a6ad5a3b8'
		})
		this.uploadHeaders = new Headers({
			// 'Content-Type': 'multipart/form-data',
			AUTH_USER: 'admin',
			AUTH_ID: '97a78cc5-2e92-42b8-9a7a-de4a6ad5a3b8'
		})
	}

	getCustomHeaders(url: string) {
		return this.http.get(url, { headers: this.headers }).map((res) => res.json())
	}
	postCustomHeaders(url: string, data: any) {
		return this.http.post(url, data, { headers: this.headers }).map((res) => res.json())
	}
	putCustomHeaders(url: string, data: any) {
		return this.http.put(url, data, { headers: this.headers }).map((res) => res.json())
	}

	patchCustomHeaders(url: string, data: any) {
		return this.http.patch(url, data, { headers: this.headers }).map((res) => res.json())
	}

	deleteCustomHeaders(url: string) {
		return this.http.delete(url, { headers: this.headers })
	}
	get(url: string, paramObj: any = {}, customMessage = false) {
		return this.http
			.get(url + this.toQueryString(paramObj), { headers: this.headers })
			.toPromise()
			.then((res) => {
				return this.extractData(res, customMessage)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	post(url: string, body: any = {}, contentType: string = 'application/json', customMessage = false) {
		this.headers['Content-Type'] = contentType
		return this.http
			.post(url, body, { headers: this.headers })
			.toPromise()
			.then((res) => {
				return this.extractData(res, customMessage)
			})
			.catch()
	}
	upload(url: string, body: any = {}, contentType: string = 'multipart/form-data', customMessage = false) {
		this.headers['Content-Type'] = contentType
		return this.http
			.post(url, body, { headers: this.uploadHeaders })
			.toPromise()
			.then((res) => {
				return res.json();
			})
			.catch()
	}
	patch(url: string, data: any, customMessage = false) {
		return this.http
			.patch(url, data, { headers: this.headers })
			.toPromise()
			.then((res) => {
				return this.extractData(res, customMessage)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	put(url: string, data: any, customMessage = false) {
		return this.http
			.put(url, data, { headers: this.headers })
			.toPromise()
			.then((res) => {
				return this.extractData(res, customMessage)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	delete(url: string, customMessage = false) {
		return this.http
			.delete(url, { headers: this.headers })
			.toPromise()
			.then((res) => {
				return this.extractData(res, customMessage)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	mockGet(url: string, paramObj: any = {}, customMessage = false) {
		return this.http
			.get(url, { headers: this.headers })
			.toPromise()
			.then((res) => {
				return this.extractData(res, customMessage)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	private toQueryString(obj) {
		let ret = []
		for (let key in obj) {
			key = encodeURIComponent(key)
			let values = obj[key]
			if (values && values.constructor == Array) {
				//数组
				let queryValues = []
				for (let i = 0, len = values.length, value; i < len; i++) {
					value = values[i]
					queryValues.push(this.toQueryPair(key, value))
				}
				ret = ret.concat(queryValues)
			} else {
				//字符串
				ret.push(this.toQueryPair(key, values))
			}
		}

		return ret.length === 0 ? '' : '?' + ret.join('&')
	}
	private extractData(res: Response, customMessage = false) {
		let body = res.json()
		// throw new Error('测试')
		if (customMessage) {
			return body
		} else {
			if (body && body.code !== '200') {
				const msg = body.reason ? body.reason : '出错了'
				this.popService.addToast({ msg: msg, type: 'error' })
				// throw new Error(msg)
				return null
			} else {
				return body.result || true
			}
		}
	}
	private toQueryPair(key, value) {
		if (typeof value == 'undefined') {
			return key
		}
		return key + '=' + encodeURIComponent(value === null ? '' : String(value))
		// return key + '=' +(value === null ? '' : String(value));
	}
}
