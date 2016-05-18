
var Schema = {};

Schema.PostItemComments = new SimpleSchema({
	id: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	},
	createdAt: {
		type: Date,
		optional: false
	},
	isDeleted: {
		type: Boolean,
		optional: false,
		defaultValue: false
	}
});

Schema.PostItemThisRatingData = new SimpleSchema({
	toBeRatedBy: {
		type: Number,
		optional: false
	},
	ratingsCompleted: {
		type: Number,
		optional: false
	}
});

Schema.PostItemRatingData = new SimpleSchema({
	raterIds: {
		type: [String],
		optional: false
	},
	runningTotalRatings: {
		type: Number,
		optional: false
	},
	skewRating: {
		type: Number,
		optional: false
	},
	viewCount: {
		type: Number,
		optional: false
	}
});

Schema.PostItem = new SimpleSchema({
	createdAt: {
		type: Date,
		optional: false
	},
	authorId: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	},
	body: {
		type: String,
		optional: true
	},
	imageId: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	},
	comments: {
		type: [Schema.PostItemComments],
		optional: true
	},
	categories: {
		type: [String],
		optional: true
	},
	isPublic: {
		type: Boolean,
		optional: false,
		defaultValue: false
	},
	thisRatingData: {
		type: Schema.PostItemThisRatingData,
		optional: true
	},
	ratingData: {
		type: Schema.PostItemRatingData,
		optional: true
	},
	isDeleted: {
		type: Boolean,
		optional: false,
		defaultValue: false
	}
});

Posts = new Meteor.Collection("posts");

Posts.attachSchema(Schema.PostItem);

Posts.allow({
	insert: function() {
		return false;
	},
	update: function() {
		return false;
	},
	remove: function() {
		return false;
	}
});