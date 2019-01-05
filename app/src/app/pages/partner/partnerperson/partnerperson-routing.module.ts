import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerpersonComponent } from './partnerperson.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerpersonComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerpersonRoutingModule { }
