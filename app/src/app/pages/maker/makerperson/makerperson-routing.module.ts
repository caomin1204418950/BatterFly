import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakerpersonComponent } from './makerperson.component';

const routes: Routes = [
  {
    path: '',
    component: MakerpersonComponent,
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
export class MakerpersonRoutingModule { }
