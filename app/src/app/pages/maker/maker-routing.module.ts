import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '创客管理',
      status: false
    },
    children: [
      {
        path:'makerperson',//人员管理
        loadChildren: './makerperson/makerperson.module#MakerpersonModule'
      },
      {
        path: 'makergroup', //分组管理
        loadChildren: './makergroup/makergroup.module#MakergroupModule' 
      },
      {
        path:'makerperson/detail',
        loadChildren:'./makerperson/detail/detail.module#DetailModule'
      },
      {
        path:'makerperson/makerpartner',
        loadChildren:'./makerperson/makerpartner/makerpartner.module#MakerpartnerModule'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerRoutingModule { }
