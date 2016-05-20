if(Meteor.isServer) { Meteor.startup(function () {
	
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
			maxSize: 5242880,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m); else console.log(m);
			}
		}
	});

	ProfImages.allow({
		insert: function (userId, fileObj) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		},
		update: function(userId,project,fields,modifier) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
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

			//waste lwip shit



											// streamToBuffer(readStream, function(err, buffer) {
											// 	if (err) {
											// 		throw new Meteor.Error('Issue processing file buffer.');
											// 	}
											// 	else if(buffer) {
											// 		try {
											// 			lwip.open(buffer, function(err, img) {
											// 				if (err) {throw new Meteor.Error('Trouble opening image for resizing.')};
															

											// 				var newW, newH;
											// 				if (image.width() > image.height()) {
											// 					newW = 600;
											// 					newH = image.height()*600/image.width();
											// 				}
											// 				else{
											// 					newH = 600;
											// 					newW = image.width()*600/image.height(); 
											// 				};


											// 				image.batch()
											// 					.resize(newW, newH)
											// 					.toBuffer('jpg', {quality: 72}, function(err, buffer) {
																
											// 						if (err) {throw new Meteor.Error(err)};
											// 						var newStream = streamifier.createReadStream(buffer);
											// 						newStream.pipe(writeStream);

											// 					});
											// 			});
											// 		}
											// 		catch(exp) {
											// 			console.log(exp);
											// 		}
											// 	}
											// 	else{
											// 		readStream.pipe(writeStream);
											// 	};
											// });
				//end waste shit
			if(fileObj.isImage()) {
				gm(readStream).size({bufferStream: true}, function(err, value) {
					if(value) {
						// if(value.height > 240) {
						// 	if(value.width > value.height) {
						// 		this.interlace("Line").resize(240).stream('jpg').pipe(writeStream);
						// 	}
						// 	else{
						// 		this.interlace("Line").resize(null, 240).stream('jpg').pipe(writeStream);
						// 	};
						// }
						// else {
						// 	if(value.width > 240) {
						// 		this.interlace("Line").resize(null, 240).stream('jpg').pipe(writeStream);
						// 	};
						// };
						this.interlace("Line").resize(600, 600).stream('jpg').pipe(writeStream);
					};
				});
			};
		}
	});

	PostImages = new FS.Collection("postimages", {
		stores: [postImagesStore],
		filter: {
			allow: {
				contentTypes: ['image/*']
			},
			maxSize: 5242880,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m); else console.log(m);
			}
		}
	});

	PostImages__ = new FS.Collection("postimagessm", {
		stores: [postImagesSmStore],
		filter: {
			allow: {
				contentTypes: ['image/*']
			},
			maxSize: 5242880,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m); else console.log(m);
			}
		}
	});

	PostImages.allow({
		insert: function (userId, fileObj) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		},
		update: function(userId,project,fields,modifier) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		},
		download: function() {
			return true;
		}
	});

	PostImages__.allow({
		insert: function (userId, fileObj) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		},
		update: function(userId,project,fields,modifier) {
			return fileObj.ownerId === userId && Meteor.users.findOne({"_id": userId});
		},
		remove: function() {
			return false;
		},
		download: function() {
			return true;
		}
	});

	Meteor.methods({
		insertShit: function (a) {
			var b = new FS.File(a);
			return PostImages__.insert(b);
		}
	});
}); };