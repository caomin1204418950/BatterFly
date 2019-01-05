import { Component, OnInit } from '@angular/core'
import { InterfaceService } from '../../shared/services/http/interfaces.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public currentNewUserCount: String
	public currentUserCount: String
	public totalPushCount: String
	public totalReadCount: String
	constructor(
		private interfaceService: InterfaceService,
	) { }
	public addedMakerCount
	public nowaMakerCount: '111111'
	public nowaPartnerCount: '2222'
	public addedCustomerCount: '2212'
	public nowaCustomerCount: '33333'
	public customerOrderCount: '21222'

	ngOnInit() {
		this.getHomeDataP()
		this.addedMakerCount='1111'
		this.nowaMakerCount= '111111'
		this.nowaPartnerCount= '2222'
		this.addedCustomerCount= '2212'
		this.nowaCustomerCount= '33333'
		this.customerOrderCount= '21222'
	}
	getHomeDataP() {
		this.interfaceService.getUserData().then((res) => {
			console.log(111, res)
			if (res) {
				this.currentNewUserCount = res.currentNewUserCount
				this.currentUserCount = res.currentUserCount
			}
		})
		this.interfaceService.getArticleData().then((res) => {
			if (res) {
				this.totalPushCount = res.todayPushCount
				this.totalReadCount = res.totalReadCount
			}
		})
	}
}
