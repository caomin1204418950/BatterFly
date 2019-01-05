import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public showBasicInm = true;
  public showCheckInm = false;
  public showLoginInm = false;
  rowId
  public telNum
  public avatar
  public inviter
  public registrationSource
  public status
  public group
  public education
  public workTime
  public job
  public position
  public city
  rows = [
    {
      rowId:0,
      telNum: '123',
      avatar:'icon',
      inviter:'1312211333',
      registrationSource:'App',
      group:'分组一',
      status:'0',
      registrationDate:'2018-03-14',
      education:'本科',
      workTime:'2',
      job:'典当',
      position:'风控经理',
      city:'北京',
      partner:[
        {
          partnerRowId:0,
          telNum:'13333',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        }
      ]
    },
    {
      rowId:1,
      telNum: '223',
      avatar:'icon',
      inviter:'1312211333',
      registrationSource:'网页',
      group:'分组二',
      status:'1',
      registrationDate:'2018-02-14',
      education:'硕士',
      workTime:'3',
      job:'软件工程师',
      position:'总经理',
      city:'南昌'
    },
    {
      rowId:2,
      telNum: '312',
      avatar:'icon',
      inviter:'1312211333',
      registrationSource:'App',
      group:'分组三',
      status:'1',
      registrationDate:'2018-03-14',
      education:'博士',
      workTime:'4',
      job:'大学老师',
      position:'副经理',
      city:'上海'
      
    }
  ]
  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
    this.rowId=this.route.snapshot.queryParams.rowId
    let id = this.rowId
    this.telNum=this.rows[id].telNum
    this.avatar=this.rows[id].avatar
    this.inviter=this.rows[id].inviter
    this.registrationSource=this.rows[id].registrationSource
    this.group=this.rows[id].group
    if(this.rows[id].status=='0'){
      this.status='禁用'
    } 
    if(this.rows[id].status=='1'){
      this.status='启用'
    }
    this.education=this.rows[id].education
    this.workTime=this.rows[id].workTime
    this.job=this.rows[id].job
    this.position=this.rows[id].position
    this.city=this.rows[id].city
  }
  showBasic(){
    this.showBasicInm = true;
    this.showCheckInm = false;
    this.showLoginInm = false;
  }
  showCheck(){
    this.showBasicInm = false;
    this.showCheckInm = true;
    this.showLoginInm = false;
  }
  showLogin(){
    this.showBasicInm = false;
    this.showCheckInm = false;
    this.showLoginInm = true;
  }
}
