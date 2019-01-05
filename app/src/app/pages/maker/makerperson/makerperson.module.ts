import { NgModule } from '@angular/core';
import { MakerpersonRoutingModule } from './makerperson-routing.module'
import { MakerpersonComponent } from './makerperson.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../shared/shared.module';
import { UiSwitchModule } from 'ng2-ui-switch'

@NgModule({
  declarations: [
    MakerpersonComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // HttpModule,
    MakerpersonRoutingModule,
    SharedModule,
    NgxDatatableModule,
    UiSwitchModule

  ],
  providers: []
})
export class MakerpersonModule { }
