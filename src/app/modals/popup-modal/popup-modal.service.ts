import { EventEmitter } from '@angular/core';

export class PopupModalService {
	showPopupEvent = new EventEmitter<string>();

	showPopup(text: any) {
		this.showPopupEvent.emit(text);
	}
}