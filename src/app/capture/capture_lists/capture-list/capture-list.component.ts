import { Component } from '@angular/core';
import { DragDropSortableService, DragDropService } from './sortable/dnd.service';
import { DragDropConfig } from './sortable/dnd.config';
import { CaptureListTestService } from './capture-list-test.service';

@Component({
	selector: 'pm-capture-list',
	// changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './capture-list.component.html',
	styleUrls: ['./capture-list.component.scss'],
	providers: [
		DragDropService,
		DragDropSortableService,
		DragDropConfig
	]
})
export class CaptureListComponent {
	constructor(private cEntryList: CaptureListTestService) {
	}

	onRefresh() {
		this.cEntryList.cEntries.forEach((cEntry, index) => {
			cEntry.position = index;
		});
	}
}
