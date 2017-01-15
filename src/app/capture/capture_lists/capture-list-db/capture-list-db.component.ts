import { Component, OnInit } from '@angular/core';
import { CaptureListService } from '../capture-list/capture-list.service';
import { PopupModalService } from '../../../modals/popup-modal/popup-modal.service';

@Component({
	selector: 'pm-capture-list-db',
	templateUrl: 'capture-list-db.component.html'
})
export class CaptureListDbComponent implements OnInit {
	entries: any;

	constructor(private captureListService: CaptureListService, private popupModalService: PopupModalService) {
	}

	ngOnInit() {
		this.captureListService.getEntryList()
			.subscribe(
				(entries: any) => {
					this.entries = entries;
				}
			);
	}

	onSave() {
		this.captureListService.saveEntryList().subscribe(
			result => {
				console.log(result);
				this.entries = result.obj[1];
				this.popupModalService.showPopup('TEST');
			}
		);
	}
}
