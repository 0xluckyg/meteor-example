import '../html/signup'

if (Meteor.isClient) {
	Template.account.helpers({
		isLogin: function() {
			return Session.get('isLogin');
		}

	});

	Template.account.events({
		'click .goToSignup':function() {
			Session.set('isLogin', false);
		},

		'click .goToLogin':function() {
			Session.set('isLogin', true);
		}

	});

	Template.ranking.events({
	    'click .rankImage':function() {
	    	if (Session.get('signupTemplate') == true || Session.get('loginTemplate') == true) {
		    	Session.set('rankingIsClicked', false);
	    	}
	    	Session.set('signupTemplate', false);
	    	Session.set('loginTemplate', false);
	  	},

	  	'click .navTag':function() {
	    	Session.set('signupTemplate', false);
	    	Session.set('loginTemplate', false);
	  	}
	});

	Template.home.events({
		'click .section1Home':function() {
			Session.set('signupTemplate', false);
	    	Session.set('loginTemplate', false);
		},

		'click .navTag':function() {
	    	Session.set('signupTemplate', false);
	    	Session.set('loginTemplate', false);
	  	}
	});

    Template.navbar.events({
    	"click .login": function() {
    		Session.set('isLogin', true);
    		Session.set('loginTemplate', true);
    		Session.set('signupTemplate', false);
    	},

    	"click .signup": function() {
    		Session.set('isLogin', false);
    		Session.set('signupTemplate', true);
    		Session.set('loginTemplate', false);
    	}
    });

}