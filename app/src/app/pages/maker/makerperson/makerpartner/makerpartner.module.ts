import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerpartnerComponent } from './makerpartner.component';
import { MakerpartnerRoutingModule } from './makerpartner-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    MakerpartnerRoutingModule,
    SharedModule,
    NgxDatatableModule,
  ],
  declarations: [MakerpartnerComponent]
})
export class MakerpartnerModule { }
