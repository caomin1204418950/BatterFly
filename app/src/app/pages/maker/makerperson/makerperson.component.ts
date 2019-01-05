import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makerperson',
  templateUrl: './makerperson.component.html',
  styleUrls: ['./makerperson.component.css']
})
export class MakerpersonComponent implements OnInit {
  public singleTip
  rows = [
    {
      rowId:0,
      telNum: '123',
      avatar:'icon',
      inviter:'1312211333',
      registrationSource:'App',
      group:'分组一',
      status:'0',
      registrationDate:'2018-03-14'
    },
    {
      rowId:1,
      telNum: '223',
      avatar:'icon',
      inviter:'1312211333',
      registrationSource:'网页',
      group:'分组二',
      status:'1',
      registrationDate:'2018-02-14'
    },
    {
      rowId:2,
      telNum: '312',
      avatar:'icon',
      inviter:'1312211333',
      registrationSource:'App',
      group:'分组三',
      status:'1',
      registrationDate:'2018-03-14'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  adjust(){
    console.log('点击了调整')
    console.log(this)
  }
  disable(){
    console.log('点击了禁用')    
  }
  enable(){
    console.log('点击了启用')    
  }
  onSelect(event){
    // console.log({selected})
    console.log(event)
  }
  switchChange(row){
  console.log(row)
  var status =null;
  if (row.status ==0){
   row.status=1;
    this.singleTip='您确定要启用此人吗？'
  }else if (row.status == 1){
    row.status = 0,
    this.singleTip='您确定要禁用此人吗？禁用后用户将无法登陆APP或平台！'    
  }
}
toDetail(e){
  console.log(e)
}
}
