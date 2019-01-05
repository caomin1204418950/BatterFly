import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

  constructor(el:ElementRef) {
    setTimeout(() => {
      el.nativeElement.focus()
    }, 500);

   }

}
