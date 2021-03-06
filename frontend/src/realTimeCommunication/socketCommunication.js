import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
	const jwtToken = userDetails;

	socket = io('http://localhost:5002', {
		auth: {
			token: jwtToken,
		},
	});

	socket.on('connect', () => {
		console.log('Successfully connect with socket.io server');
		console.log(socket.id);
	});
};
