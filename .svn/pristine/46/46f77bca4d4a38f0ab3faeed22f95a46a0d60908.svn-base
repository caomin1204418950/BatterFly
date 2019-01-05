import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppLoadService } from './app-load.service'
export function get_menus(appLoad: AppLoadService) {
  return () => appLoad.getSettings()
}

@NgModule({
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: get_menus, deps: [AppLoadService], multi: true }
  ],
})
export class AppLoadModule { }
