import { Component, OnInit } from '@angular/core';
import { PopupModalService } from './popup-modal.service';

@Component({
	selector: 'pm-app-popup-modal',
	templateUrl: './popup-modal.component.html'
})
export class PopupModalComponent implements OnInit {
	message = 'Vmi';
	display = 'none';

	constructor(private popupModalService: PopupModalService) {}

	ngOnInit() {
		this.popupModalService.showPopupEvent.subscribe(
			(message: string) => {
				this.message = 'CSABIKA';
				this.display = 'block';
			}
		);
	}


	close() {
		this.display = 'none';
	}
}