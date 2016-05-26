if (Meteor.isClient) {

    Template.navbar.helpers({
        currentPage: function () {
            return Session.get('currentPage');
        }
    });
}