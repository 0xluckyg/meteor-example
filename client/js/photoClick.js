import '../html/photoClick.html';
import '../html/ranking.html';
import '../html/myPage.html';

if (Meteor.isClient) {

Template.photoClick.helpers({

	imageClicked: function() {
		return Session.get('imageClicked');
	},
	
	commentButtonClicked: function() {
		return Session.get('commentButtonClicked');
	},

	comments: [
	    { text: 'This is comment 1 This is comment 1 This is comment 1 This is comment 1 This is comment 1 ', name: 'Scott', time: '10/20/2015'},
	    { text: 'This is comment 2 This is comment 2 This is comment 2 This is comment 2', name: 'Gilfoyle', time: '10/20/2015'},
	    { text: 'This is comment 3', name: 'Jay', time: '10/20/2015'},
	    { text: 'This is comment 4 This is comment 4 ', name: 'Dinesh', time: '10/20/2015'},
	    { text: 'This is comment 5 This is comment 5 This is comment 5 This is comment 5 This is comment 5 This is comment 5 This is comment 5 ', name: 'McLovin', time: '10/20/2015'},
	    { text: 'This is comment 6', name: 'Richard', time: '10/20/2015'}
	]

});

Template.photoClick.events({

	'click .commentButton':function() {
		if (Session.get('commentButtonClicked') == false) {
			Session.set('commentButtonClicked', true);
		} else {
			Session.set('commentButtonClicked', false);
		}
	}
});

Template.ranking.events({

    'click .rankImage':function() {
	    if (Session.get('rankingIsClicked') == false) {
	    	Session.set('rankingIsClicked', true);
	    	Session.set('imageClicked', this.image);
	    	// Ssession.set('ratingClicked', )
	    } else {
	      	Session.set('rankingIsClicked', false);
			Session.set('commentButtonClicked', false);
	    }
  	},

  	'click .navTag':function() {
	    Session.set('rankingIsClicked', false);
		Session.set('commentButtonClicked', false);
  	}
});

Template.myPage.events({

	'click .myPost':function() {
    	Session.set('myPostIsClicked', true);
    	Session.set('imageClicked', this.image);
  	},

  	'click .section1myPage':function() {
    	Session.set('myPostIsClicked', false);
		Session.set('commentButtonClicked', false);
  	},

  	'click .navTag':function() {
    	Session.set('myPostIsClicked', false);
		Session.set('commentButtonClicked', false);
  	}

});

}












