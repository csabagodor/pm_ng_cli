import { Injectable } from '@angular/core';
import { CaptureEntry } from '../../models/captureEntry';

@Injectable()
export class CaptureListTestService {

	cEntries: CaptureEntry[];

	constructor() {
		this.cEntries = [
			new CaptureEntry({
				type: 'click',
				selector: 'html/body/div[2]/div[2]/div[2]/div[2]/form/div[2]/input[2]',
				position: 0
			}),
			new CaptureEntry({
				type: 'type',
				selector: 'html/body/div[2]/div[2]/div[2]/div[2]/form/div[2]/input[2]',
				parameters: 'Paris, France (PAR)',
				position: 1
			}),
			new CaptureEntry({
				type: 'keypress',
				parameters: '9',
				position: 2
			}),
			new CaptureEntry({
				type: 'type',
				selector: '/html/body/div[2]/div[2]/div[2]/div[2]/form/div[3]/input[2]',
				parameters: 'Madrid, Espagne (MAD)',
				position: 3
			}),
			new CaptureEntry({
				type: 'keypress',
				parameters: '13',
				position: 4
			}),
			new CaptureEntry({
				type: 'click',
				selector: '/html/body/div[2]/div[2]/div[2]/div[2]/form/div[8]/input',
				position: 5
			})
		];
	}
}