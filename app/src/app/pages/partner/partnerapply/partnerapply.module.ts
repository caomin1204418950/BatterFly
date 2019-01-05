import { NgModule } from '@angular/core';
import { PartnerapplyRoutingModule } from './partnerapply-routing.module'
import { PartnerapplyComponent } from './partnerapply.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    PartnerapplyComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // HttpModule,
    PartnerapplyRoutingModule,
    SharedModule,
    NgxDatatableModule

  ],
  providers: []
})
export class PartnerapplyModule { }
