import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from './../../../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
