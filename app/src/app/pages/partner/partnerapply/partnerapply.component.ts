import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerapply',
  templateUrl: './partnerapply.component.html',
  styleUrls: ['./partnerapply.component.css']
})
export class PartnerapplyComponent implements OnInit {
  rows = [
    {
      telNum: '123',
      checkStatus:'待审核',
      checkWay:'自动审核',
      applyDate:'2018-11-11',
      checkDate:'2018-12-11',
    },
    {
      telNum: '123',
      checkStatus:'已通过',
      checkWay:'自动审核',
      applyDate:'2018-11-11',
      checkDate:'2018-12-11',
    },
    {
      telNum: '123',
      checkStatus:'未通过',
      checkWay:'自动审核',
      applyDate:'2018-11-11',
      checkDate:'2018-12-11',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
