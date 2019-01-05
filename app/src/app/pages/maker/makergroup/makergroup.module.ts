// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';
import { MakergroupRoutingModule } from './makergroup-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MakergroupComponent } from './makergroup.component';
import { UiSwitchModule } from 'ng2-ui-switch'

@NgModule({
  declarations: [
    MakergroupComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // HttpModule,
    MakergroupRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule
  ],
  providers: []
})
export class MakergroupModule { }
