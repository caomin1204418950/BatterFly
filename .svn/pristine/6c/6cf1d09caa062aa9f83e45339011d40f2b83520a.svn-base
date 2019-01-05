import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleFullScreenDirective } from './directives/fullscreen/toggle-fullscreen.directive';
import { AccordionAnchorDirective } from './directives/accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './directives/accordion/accordionlink.directive';
import { AccordionDirective } from './directives/accordion/accordion.directive';
import { HttpClientModule } from '@angular/common/http';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CardComponent } from './components/card/card.component';
import { CardToggleDirective } from './directives/card-toggle/card-toggle.directive';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';
import { ModalAnimationComponent } from './components/modal-animation/modal-animation.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { PageNavComponent } from './components/page-nav/page-nav.component';
import { SpaceComponent } from './components/space/space.component';
import { FormsModule } from '@angular/forms';
import { ResourceDirective } from './directives/resource/resource.directive';
import { MyeditorComponent } from './components/myeditor/myeditor.component';
import { TagComponent } from './components/tag/tag.component';
import { AutoFocusDirective } from './directives/auto-focus/auto-focus.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    FormsModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    PageNavComponent,
    SpaceComponent,
    ResourceDirective,
    MyeditorComponent,
    TagComponent,
    AutoFocusDirective
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    PageNavComponent,
    SpaceComponent,
    ResourceDirective,
    MyeditorComponent,
    TagComponent,
    AutoFocusDirective
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
