import * as express from 'express';
import * as path from 'path';

import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import LogTest from './log';
import CaptureEntry from './captureEntry';

class Server {
	public express: express.Application;
	private port: number;

	public static bootstrap(): Server {
		return new Server();
	}

	constructor() {
		this.express = express();

		this.configure();
		this.mongooseConfigure();
		this.route();
	}

	configure() {
		this.port = 3000;
	}

	mongooseConfigure() {
		mongoose.connect('localhost:27017/price-monitor');

		this.express.use(logger('dev'));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({extended: false}));
		this.express.use(cookieParser());
		this.express.use(express.static(path.join(__dirname, 'public')));

		this.express.use(function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
			next();
		});

		this.express.use('/log', LogTest);
		this.express.use('/capture_entry', CaptureEntry);
	}

	route() {
		this.express.listen(this.port, (err: string) => {
			if (err) {
				console.log(err);
			}
		});
	}
}

export default new Server().express;
