import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakergroupComponent } from './makergroup.component';

const routes: Routes = [
  {
    path: '',
    component: MakergroupComponent,
    data:{
      title:'人员管理',
      status:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakergroupRoutingModule { }
