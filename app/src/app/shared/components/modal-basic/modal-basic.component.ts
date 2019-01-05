import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalBasicComponent implements OnInit {
  @Input() dialogClass: string;
  @Input() hideHeader = false;
  @Input() hideFooter = false;
  @Input() visible = false;
  @Input() visibleAnimate = false;
  @Input() width;
  @Input() index;

  // public visible = false;
  // public visibleAnimate = false;

  constructor() {}

  ngOnInit() {
    
  }

  public show(e): void {
    console.log(e)
    var that = this
    if(e instanceof Array){
      if(e.length==0){return}
    }
    // else if(e instanceof Number){
    // }
    if(!e||e!=0||e!='0'){
      this.visible = true;
      setTimeout(() => this.visibleAnimate = true, 100);
    }
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
