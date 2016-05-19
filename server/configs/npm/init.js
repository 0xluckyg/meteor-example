if (Meteor.isServer) {
	lwip = Meteor.npmRequire('lwip');
	streamToBuffer = Meteor.npmRequire('stream-to-buffer');
	streamifier = Meteor.npmRequire('streamifier');
};