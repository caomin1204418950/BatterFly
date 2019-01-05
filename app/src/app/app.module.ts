import { BrowserModule } from '@angular/platform-browser'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastyModule } from 'ng2-toasty'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { AdminComponent } from './pages/admin/admin.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'
import { MenuItems } from './shared/common/menu-items/menu-items'
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component'
import { HttpInterceptorModule } from 'ng-http-interceptor'
import { HttpInterceptorService } from 'ng-http-interceptor'
import { TreeviewModule } from 'ngx-treeview'
import { AppLoadModule } from './shared/modules/app-load/app-load.module'
import { HttpServe } from './shared/services/http/http-serve.service'
import { PopService } from './shared/services/pop/pop.service'

import { InterfaceService } from './shared/services/http/interfaces.service';


@NgModule({
	declarations: [ AppComponent, AdminComponent, BreadcrumbsComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		SharedModule,
		HttpInterceptorModule,
		TreeviewModule.forRoot(),
		ToastyModule.forRoot(),
		AppLoadModule
	],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [ HttpServe, InterfaceService, MenuItems, HttpInterceptorService ,PopService],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
