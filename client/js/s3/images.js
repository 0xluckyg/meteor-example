if (Meteor.isClient) {
	console.log("%cHello, Scott", "color:blue;font-size:48px;")
	var profImagesStore = new FS.Store.S3("profimages");

	ProfImages = new FS.Collection("profimages", {
		stores: [profImagesStore],
		filter: {
			allow: {
				contentTypes: ['image/*']
			},
			maxSize: 5242880,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m);
			}
		}
	});

	

	var postImagesStore = new FS.Store.S3("postimages");
	var postImagesSmStore = new FS.Store.S3("postimagessm"); //sm = small

	PostImages = new FS.Collection("postimages", {
		stores: [postImagesStore],
		filter: {
			allow: {
				contentTypes: ['image/*']
			},
			maxSize: 5242880,
			onInvalid: function(m) {
				if (Meteor.isClient) alert(m);
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
				if (Meteor.isClient) alert(m);
			}
		}
	});

	// Meteor.subscribe('allPImgs');
};