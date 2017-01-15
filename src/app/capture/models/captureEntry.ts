import entryTypes from '../types/captureEntryTypes';

export class CaptureEntry {

	type: entryTypes;
	selector: string;
	parameters: string;
	position: number;

	constructor({ type, selector, parameters, position }:
		{
			type: entryTypes,
			selector?: string,
			parameters?: string,
			position: number
		}) {
		this.type = type;
		this.selector = selector;
		this.parameters = parameters;
		this.position = position;
	}

}