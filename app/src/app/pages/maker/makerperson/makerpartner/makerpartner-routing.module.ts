import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakerpartnerComponent } from './makerpartner.component';

const routes: Routes = [
  {
    path: '',
    component: MakerpartnerComponent,
    data: {
      title: '人员管理 - 创客伙伴',
      status: true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerpartnerRoutingModule { }
