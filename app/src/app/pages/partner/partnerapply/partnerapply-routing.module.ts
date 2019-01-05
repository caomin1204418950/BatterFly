import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerapplyComponent } from './partnerapply.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerapplyComponent,
    data: {
      title: '申请管理',
      status: true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerapplyRoutingModule { }
