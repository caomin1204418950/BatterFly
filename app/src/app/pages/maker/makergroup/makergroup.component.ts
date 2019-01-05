import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-makergroup',
  templateUrl: './makergroup.component.html',
  styleUrls: ['./makergroup.component.css']
})
export class MakergroupComponent implements OnInit {
  public items
  public selected = []
  public user
  public status
  rows = [
    {
      index:0,
      name: '123',
      percent:'1.03',
      status:'1',
      user:''
    },
    {
      index:1,
      
      name: '321',
      percent:'3',
      status:'0',
      user:'zc'
    },
    {
      index:2,
      
      name: '212',
      percent:'2.3',
      status:'1',
      user:'cm'
    }
  ]
  constructor() { 
  }

  ngOnInit() {
    console.log(this.rows)
    
  }
  addGroup(){
    // console.log(this.items)
    
    // var groupValue = document.getElementsByName("groupValue")[0].value;
    // var percentValue = document.getElementsByName("percentValue")[0].value;
    // var decrateValue = document.getElementsByName("decrateValue")[0].value;
    // console.log(groupValue)
    // console.log(percentValue)
    // console.log(decrateValue)
    // this.items={name:groupValue,percent:percentValue}
    // console.log(this.items)
    // this.rows.push(this.items)
    // console.log(this.rows)
  }
  switchange(row){
    // console.log(row.index)
    // console.log (this.rows[row.index].status)
    this.user=row.user
    this.status=row.status
    var status = null
    
    if(row.status==1 ){
      status='0'
    }
    if(row.status==0){
      status='1'
    }
    row.status=status
  }
  statusConfirm(){
    if(this.user!=''&&this.status==1){
      alert('你所选的分组中存在人员，请移至其他分组后再禁用')
    }
  }
  onSelect({ selected }) {
    console.log(1)
    this.selected = selected
    console.log(this.selected)
  }
  manyDisable(){
    let selected = this.selected
    if(selected.length==0){
      alert('请至少选择一个分组')
    }
    else{
      var user = selected.filter(function(item){
      
          return item.user!=''
          
        
      })
      if(user.length!=0){
        alert('你所选的分组存在人员，请移至其他分组后再禁用')
      } else {
        console.log('批量禁用成功')
      }
    }
  }
  manyAble(){
    console.log('批量启用')
  }
}