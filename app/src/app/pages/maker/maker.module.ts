import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerRoutingModule } from './maker-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    MakerRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: []
})
export class MakerModule { }
