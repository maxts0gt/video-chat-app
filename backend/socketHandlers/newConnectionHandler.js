const serverStore = require('../serverStore');

const newConnectionHandler = async (socket, io) => {
	const userDetails = socket.user;

	serverStore.addNewConnectedUser({
		userId: userDetails.userId,
	});
};

module.exports = {
	newConnectionHandler,
};
