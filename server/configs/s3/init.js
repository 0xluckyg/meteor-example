if(Meteor.isServer){ Meteor.startup(function () {
	
	var profImagesStore = new FS.Store.S3("profimages", {
		region: "us-west-2",
		accessKeyId: "AKIAJGKL7Z6WGVQUIYEQ",
		secretAccessKey: "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",
		bucket: "joqur",
		folder: "profimages"
	});

	ProfImages = new FS.Collection("profimages", {
		stores: [profImagesStore],
		filter: {
			allow: {
				contentTypes: ['image/*']
			},
			maxSize: 600000,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m);
			}
		}
	});

	ProfImages.allow({
		insert: function (userId, fileObj) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		}
	});

	

	

	var postImagesStore = new FS.Store.S3("postimages", {
		region: "us-west-2",
		accessKeyId: "AKIAJGKL7Z6WGVQUIYEQ",
		secretAccessKey: "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",
		bucket: "joqur",
		folder: "postimages"
	});
	var postImagesSmStore = new FS.Store.S3("postimagessm", {
		region: "us-west-2",
		accessKeyId: "AKIAJGKL7Z6WGVQUIYEQ",
		secretAccessKey: "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",
		bucket: "joqur",
		folder: "postimagessm"
	});

	PostImages = new FS.Collection("postimages", {
		stores: [postImagesStore],
		filter: {
			allow: {
				contentTypes: ['images/*']
			},
			maxSize: 3145728,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m);
			}
		}
	});

	PostImages__ = new FS.Collection("postimagessm", {
		stores: [postImagesSmStore],
		filter: {
			allow: {
				contentTypes: ['images/*']
			},
			maxSize: 600000,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m);
			}
		}
	});

	PostImages.allow({
		insert: function (userId, fileObj) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		}
	});

	PostImages__.allow({
		insert: function (userId, fileObj) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		}
	});


	

});  };