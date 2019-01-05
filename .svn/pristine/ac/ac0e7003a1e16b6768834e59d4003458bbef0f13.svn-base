import { Component, OnInit,Input } from '@angular/core'
import { PopService } from '../../services/pop/pop.service'

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	styleUrls: [ './tag.component.scss' ]
})
export class TagComponent implements OnInit {
  @Input() tags
  constructor(private popService:PopService) {}
  new = false
  newTagValue = null
	// tags = []
	ngOnInit() {}

	removeTag(i) {
    this.tags.splice(i,1)
	}
	inputShow() {
    if(this.tags.length >= 5) {
      this.popService.addToast({type:'warning',msg:'最多只能添加五个标签！'})
    }
    else {
      this.newTagValue = null
      this.new = true
    }
	}
	inputSure() {
    if(this.tags.length >= 5) {
      this.popService.addToast({type:'warning',msg:'最多只能添加五个标签！'})
    }
    else if(this.newTagValue) {
      this.tags.push(this.newTagValue)
    }
    this.new = false
	}
}
