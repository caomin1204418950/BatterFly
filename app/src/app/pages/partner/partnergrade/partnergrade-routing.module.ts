import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnergradeComponent } from './partnergrade.component';

const routes: Routes = [
  {
    path: '',
    component: PartnergradeComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnergradeRoutingModule { }
