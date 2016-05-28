if (Meteor.isClient) {

    Template.navbar.helpers({
        currentPage: function () {
            return Session.get('currentPage');
        }
    });

    Template.navbar.events({
     	'click .navTagLi': function(event) {
        	var currentPage = $(event.currentTarget);
		}
	});

}