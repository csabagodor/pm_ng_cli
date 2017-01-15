import { Injectable } from '@angular/core';
import { CaptureListTestService } from './capture-list-test.service';
import { MongoodbService } from '../../../storage/mongoodb.service';

@Injectable()
export class CaptureListService {

	constructor(private mongoodbService: MongoodbService,
		private captureListTestService: CaptureListTestService) {}

	getEntryList() {
		return this.mongoodbService.get({route: 'capture_entry', params: null});
	}

	saveEntryList() {
		let headerObj = {'Content-Type': 'application/json'};
		return this.mongoodbService.set({body: this.captureListTestService.cEntries, headers: headerObj});
	}
}
