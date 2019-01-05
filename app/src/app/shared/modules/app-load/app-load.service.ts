import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Http, Headers } from '@angular/http'
import resource from '../../common/menu-items/resource'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class AppLoadService {
	constructor(private http: Http, private httpClient: HttpClient) {}
	// getSettings(): Promise<any> {
	// 	let headers = new Headers({
	// 		AUTH_USER: 'admin',
	// 		AUTH_ID: '97a78cc5-2e92-42b8-9a7a-de4a6ad5a3b8'
	// 	})
	// 	const promise = this.http
    //         //   .get('api/peak-resource/api/resource/user/permission')
	// 		.get('api/peak-resource/api/resource/user/permission', { headers: headers })
	// 		.map((res) => res.json())
	// 		.toPromise()
	// 		.then((res) => {
	// 			resource.ResourceItems = res.result.resource
	// 			resource.menu = res.result.menu
	// 			return res
	// 		})
	// 	return promise
    // }
    getSettings() {}
}
