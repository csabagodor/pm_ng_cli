import * as express from 'express';
import CaptureEntrySchema from '../models/captureEntry';

class CaptureEntry {
	public router: express.Router;

	constructor() {
		this.router = express.Router();
		this.routes();
	}

	routes() {
		this.router.post('/', function(req, res, next) {
			CaptureEntrySchema.remove({})
				.exec(function (err) {
					if (err) {
						return res.status(500).json({
							title: 'An error occurred during delete',
							error: err
						});
					} else {
						let newEntries = [];
						req.body.forEach((entry, index) => {
							let newEntry = new CaptureEntrySchema({
								type: entry.type,
								selector: entry.selector,
								parameters: entry.parameters,
								position: entry.position
							});

							newEntries.push(newEntry);
						});

						CaptureEntrySchema.create(newEntries, function(err) {
							if (err) {
								res.status(500).json({
									title: 'An error occurred',
									error: err
								});
							} else {
								res.status(201).json({
									message: 'Test saved and created',
									obj: arguments
								});
							}
						});
					}
				});
		});

		this.router.get('/', function(req, res, next) {
			CaptureEntrySchema.find()
				.exec(function (err, messages) {
					if (err) {
						return res.status(500).json({
							title: 'An error occurred',
							error: err
						});
					}
					res.status(200).json({
						message: 'Success',
						obj: messages
					});
				});
		});
	}
}


export default new CaptureEntry().router;