import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerperson',
  templateUrl: './partnerperson.component.html',
  styleUrls: ['./partnerperson.component.css']
})
export class PartnerpersonComponent implements OnInit {

  rows=[
    {
      telNum:'1333222111',
      name:'张三三三',
      inviter:'12223330098',
      grade:'1级',
      joinDate:'2013-04-15'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
