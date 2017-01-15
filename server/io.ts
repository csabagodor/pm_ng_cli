import * as SocketIO from 'socket.io';
import * as express from 'express';
import * as http from 'http';

export default class SIOTest {

	constructor() {
		let app = express();
		let httpServer = http['Server'](app);
		let io = SocketIO(httpServer);

		httpServer.listen(5000, () => {
			let com = io.of('com').on('connection', (socket) => {
				console.log('user connected');

				socket.on('disconnect', function () {
					console.log('user disconnected');
				});

				socket.on('add-message', (message) => {
					io.emit('message', {type: 'new-message', text: message});
				});
			});
		});
	}
}