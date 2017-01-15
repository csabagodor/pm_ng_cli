import * as mongoose from 'mongoose';

class LogSchema {
	public model: any;
	private schema: mongoose.Schema;

	constructor() {
		this.schema = new mongoose.Schema({
			title: {type: String, required: true},
			description: {type: String, required: true}
		});

		this.model = mongoose.model('LogSchema', this.schema);
	}
}

export default new LogSchema().model;
