import { NgModule } from '@angular/core';
import { PartnerpersonRoutingModule } from './partnerperson-routing.module'
import { PartnerpersonComponent } from './partnerperson.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    PartnerpersonComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // HttpModule,
    PartnerpersonRoutingModule,
    SharedModule,
    NgxDatatableModule

  ],
  providers: []
})
export class PartnerpersonModule { }
