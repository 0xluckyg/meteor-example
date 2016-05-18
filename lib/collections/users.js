var Schema = {};


Schema.UserProfileName = new SimpleSchema({
	lastUpdated: {
		type: Date,
		optional: true
	},
	fullName: {
		type: String,
		optional: false
	},
	displayName: {
		type: String,
		optional: true
	}
});

Schema.UserProfileThisRatingData = new SimpleSchema({
	ratingsGivenCount: {
		type: Number,
		optional: false
	},
	runningTotalOfRatingsGiven: {
		type: Number,
		optional: false
	}
});

Schema.UserProfileThatRatingData = new SimpleSchema({
	ratingsRecievedCount: {
		type: Number,
		optional: false
	},
	runningTotalOfRatingsRecieved: {
		type: Number,
		optional: false
	},
	profileViews: {
		type: Number,
		optional: true
	}
});

Schema.UserProfilePostIds = new SimpleSchema({
	isPublic: {
		type: Boolean,
		optional: false,
		defaultValue: false
	},
	id: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	}
});

Schema.UserProfileInteractionLog = new SimpleSchema({
	interactionType: {
		type: String,
		optional: false
	},
	targetId: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	}
});

Schema.UserProfile = new SimpleSchema({
	name: {
		type: Schema.UserProfileName,
		optional: false
	},
	thisRatingData: {
		type: Schema.UserProfileThisRatingData,
		optional: true
	},
	thatRatingData: {
		type: Schema.UserProfileThatRatingData,
		optional: true
	},
	postIds: {
		type: [Schema.UserProfilePostIds],
		optional: true
	},
	profileImageId: {
		type: String,
		optional: true,
		regEx: SimpleSchema.RegEx.Id
	},
	interactionLog: {
		type: Schema.UserProfileInteractionLog,
		optional: true
	},
	gender: {
		type: Number,
		optional: true
	},
	age: {
		type: Number,
		optional: true
	}
});

Schema.User = new SimpleSchema({
	createdAt: {
		type: Date,
	},
	emails: {
		type: [Object],
		optional: false
	},
	"emails.$.address": {
		type: String
	},
	"emails.$.verified": {
		type: Boolean
	},
	notThroughFacebook: {
		type: Boolean,
		optional: false,
		defaultValue: false
	},
	setupComplete: {
		type: Boolean,
		optional: false,
		defaultValue: false
	},
	profile: {
		type: Schema.UserProfile,
		optional: true
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	roles: {
		type: Object,
		optional: true,
		blackbox: true
	}
});

Meteor.users.attachSchema(Schema.User);

Meteor.users.allow({
	insert: function() {
		return false;
	},
	update: function() {
		return false;
	},
	remove: function() {
		return false;
	}
})


