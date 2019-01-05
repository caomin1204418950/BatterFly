import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '合伙人管理',
      status: false
    },
    children: [
      {
        path:'partnerapply',//申请管理
        loadChildren: './partnerapply/partnerapply.module#PartnerapplyModule'
      } ,
      {
        path:'partnerperson',//人员管理
        loadChildren: './partnerperson/partnerperson.module#PartnerpersonModule'
      }
      ,
      {
        path:'partnergrade',//等级管理
        loadChildren: './partnergrade/partnergrade.module#PartnergradeModule'
      }
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
