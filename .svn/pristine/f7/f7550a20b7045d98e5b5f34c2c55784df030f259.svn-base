import { Component, OnInit, Input, Output, OnDestroy, AfterViewInit, EventEmitter } from '@angular/core'
// import { InterfaceService } from '../../services/http/interfaces.service'
import { HttpServe } from '../../services/http/http-serve.service'

@Component({
	selector: 'app-myeditor',
	templateUrl: './myeditor.component.html',
	styleUrls: [ './myeditor.component.scss' ]
})
export class MyeditorComponent implements OnInit, AfterViewInit, OnDestroy {
	@Input() elementId: string
	@Input() initialContent: string
	@Output() onEditorKeyup = new EventEmitter()
	editor
	constructor(private interfaceService: HttpServe) {}

	ngOnInit() {}
	ngOnChanges() {
		if (this.editor) {
			if (this.initialContent && this.initialContent.length > 0) {
				let content = this.initialContent
				this.editor.setContent(content)
			} else {
				this.editor.setContent('')
			}
		}
	}
	ngAfterViewInit() {
		let that = this
		tinymce.init({
			selector: '#' + this.elementId,
			height: 300,
			plugins: [ 'link', 'paste', 'preview', 'code', 'image' ],
			skin_url: '/assets/tinymce/skins/lightgray',
			setup: (editor) => {
				this.editor = editor
				editor.on('change', () => {
					const content = editor.getContent()
					this.onEditorKeyup.emit(content)
				})
			},
			images_upload_url:'/upload'
			// images_upload_handler: function(blobInfo, success, failure) {
			// 	var formData = new FormData()
			// 	formData.append('file', blobInfo.blob(), blobInfo.filename())
			// 	that.interfaceService.upload('/upload', formData).then((data) => {
			// 		success(data)
			// 	})
			// }
		})
	}
	upload

	ngOnDestroy() {
		tinymce.remove(this.editor)
	}
}
