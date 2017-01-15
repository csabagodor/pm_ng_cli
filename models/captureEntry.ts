import * as mongoose from 'mongoose';

class CaptureEntrySchema {
	public model: any;
	private schema: mongoose.Schema;

	constructor() {
		this.schema = new mongoose.Schema({
			type: {type: String, required: true},
			selector: {type: String},
			parameters: {type: String},
			position: {type: Number, required: true}
		});

		this.model = mongoose.model('CaptureEntrySchema', this.schema);
	}
}

export default new CaptureEntrySchema().model;
