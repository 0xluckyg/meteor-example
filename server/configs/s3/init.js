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
		},
		update: function(userId,project,fields,modifier) {
			return true;
		},
		download: function() {
			return true;
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
		folder: "postimagessm",
		transformWrite: function(fileObj, readStream, writeStream) {
			streamToBuffer(readStream, function(err, buffer){
				if (err) {
					throw new Meteor.Error('Issue processing file buffer.');
				}
				else if(buffer) {
					lwip.open(buffer, function(err, img) {
						if (err) {throw new Meteor.Error('Trouble opening image for resizing.')};
						

						var newW, newH;
						if (image.width() > image.height()) {
							newW = 600;
							newH = image.height()*600/image.width();
						}
						else{
							newH = 600;
							newW = image.width()*600/image.height(); 
						};


						image.batch()
							.resize(newW, newH)
							.toBuffer('jpg', {quality: 72}, function(err, buffer){
							
								if (err) {throw new Meteor.Error(err)};
								var newStream = streamifier.createReadStream(buffer);
								newStream.pipe(writeStream);

							});
					});
				}
				else{
					readStream.pipe(writeStream);
				};
			});
		}
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
		},
		update: function(userId,project,fields,modifier) {
			return true;
		},
		download: function() {
			return true;
		}
	});

	PostImages__.allow({
		insert: function (userId, fileObj) {
			return true//fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		},
		update: function(userId,project,fields,modifier) {
			return true;
		},
		remove: function() {
			return true;
		},
		download: function() {
			return true;
		}
	});

	Meteor.publish('allPImgs', function () {
		return PostImages__.find();
	});

}); };