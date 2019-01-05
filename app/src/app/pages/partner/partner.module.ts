import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerRoutingModule } from './partner-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    PartnerRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: []
})
export class PartnerModule { }
