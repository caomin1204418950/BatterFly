import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-makerpartner',
  templateUrl: './makerpartner.component.html',
  styleUrls: ['./makerpartner.component.css']
})
export class MakerpartnerComponent implements OnInit {
  public inviterNum //邀请人电话号码
  public partnerNum //序号
  public partnerTelnum
  public partnerAvatar
  public partnerRegistrationSource
  public partnerGroup
  public partnerRegistrationDate
  partner=[]
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
          num:'1',
          telNum:'13333',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        },
        {
          partnerRowId:1,
          num:'2',
          telNum:'12233',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        },
        {
          partnerRowId:2,
          num:'3',
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
      city:'南昌',
      partner:[
        {
          partnerRowId:0,
          num:'1',
          telNum:'13333',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        },
        {
          partnerRowId:1,
          num:'2',
          telNum:'12233',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        },
        {
          partnerRowId:2,
          num:'3',
          telNum:'13333',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        }
      ]
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
      city:'上海',
      partner:[
        {
          partnerRowId:0,
          num:'1',
          telNum:'13333',
          avatar:'icon',
          registrationSource:'App',
          group:'默认分组',
          registrationDate:'2018-12-21 11:22:11'
        }
      ]
    }
  ]
  constructor( private router: Router , private route : ActivatedRoute) {
    
   }

  ngOnInit() {
    //rowId 为详情页面的行id
    var rowId=this.route.snapshot.queryParams.rowId
    this.inviterNum=this.rows[rowId].telNum
    console.log(this.rows[rowId].partner)
    this.partner=this.rows[rowId].partner.map(function (item){
      return item
    })
    //  this.partnerTelnum=this.rows[rowId].partner[rowId]
    console.log(this.partner)
  }
  toDetail(){
    this.router.navigateByUrl("/maker/makerperson/detail");
  }
}
