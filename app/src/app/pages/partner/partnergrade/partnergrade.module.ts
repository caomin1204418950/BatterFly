import { NgModule } from '@angular/core';
import { PartnergradeRoutingModule } from './partnergrade-routing.module'
import { PartnergradeComponent } from './partnergrade.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    PartnergradeComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // HttpModule,
    PartnergradeRoutingModule,
    SharedModule,
    NgxDatatableModule

  ],
  providers: []
})
export class PartnergradeModule { }
