
var Schema = {};


Schema.CommentItem = new SimpleSchema({
	createdAt: {
		type: Date,
		optional: false
	},
	authorId: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	},
	parentPostId: {
		type: String,
		optional: false,
		regEx: SimpleSchema.RegEx.Id
	},
	body: {
		type: String,
		optional: true
	},
	isDeleted: {
		type: Boolean,
		optional: false,
		defaultValue: false
	}
});

Comments = new Meteor.Collection("comments");

Comments.attachSchema(Schema.CommentItem);

Comments.allow({
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


