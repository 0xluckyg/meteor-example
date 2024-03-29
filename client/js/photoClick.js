import '../html/photoClick.html';
import '../html/ranking.html';
import '../html/myPage.html';

if (Meteor.isClient) {

Template.photoClick.rendered = function () {
	$('.photoClickTemplate').stopOverscroll();
};

Template.photoClick.helpers({

	imageClicked: function() {
		return Session.get('imageClicked');
	},
	
	commentButtonClicked: function() {
		if(Session.get('commentButtonClicked')) {

			return true;

		}
		else return;
	},

	//Data for image rate and imageNumRate
	clickedImageRating:	function() {
		return Session.get('clickedImageRating');
	},

	clickedImageNumRating: function() {
		return Session.get('clickedImageNumRating');
	},

	//Data for comments
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

	//If comment button is clicked
	'click .commentButton':function() {
		if (Session.get('commentButtonClicked') == false) {
			Session.set('commentButtonClicked', true);
			setTimeout(function() {
				$('.photoClickTemplate').animate({scrollTop: $('.photoClick')[0].offsetHeight + 108});
			}, 10);
		} else {
			setTimeout(function() {
				$('.photoClickTemplate').animate({scrollTop: 0});
			}, 10);
			setTimeout(function() {
				Session.set('commentButtonClicked', false);
			}, 500);
		}

	},

});

Template.ranking.events({

	//Whether post is clicked or not
    'click .rankImage':function() {
	    if (Session.get('rankingIsClicked') == false) {
	    	Session.set('rankingIsClicked', true);
	    	Session.set('imageClicked', this.image);

	    	//Get rid of photoClick if background is clicked
	    } else {
	      	Session.set('rankingIsClicked', false);
			Session.set('commentButtonClicked', false);
	    }
  	},

  	//If navTag is clicked, get rid of photoClick
  	'click .navTag':function() {
	    Session.set('rankingIsClicked', false);
		Session.set('commentButtonClicked', false);
  	},

  	//Bring rating and numRating form ranking to photoClick
  	'click .rankShade':function(event) {
  		var rating = $(event.currentTarget).children().children('.rankRating').text();
  		var numRating = $(event.currentTarget).children().children('.rankNumRating').text();
  		Session.set('clickedImageRating', rating);
  		Session.set('clickedImageNumRating', numRating);
  	}

});

//Bringing data from myPage
Template.myPage.events({

	//Bring photo from myPage to photoClick
	'click .myPost':function() {
    	Session.set('myPostIsClicked', true);
    	Session.set('imageClicked', this.image);
  	},

  	//Whether post is clicked or not
  	'click .section1myPage':function() {
    	Session.set('myPostIsClicked', false);
		Session.set('commentButtonClicked', false);
  	},

  	//If navTag is clicked, get rid of photoClick
  	'click .navTag':function() {
    	Session.set('myPostIsClicked', false);
		Session.set('commentButtonClicked', false);
  	},

  	//Bring rating and numRating form myPage to photoClick
  	'click .section2myPage .myPostShade':function(event) {
  		var rating = $(event.currentTarget).children('.myPostRecentRating').text();
  		var numRating = $(event.currentTarget).children('.myPostNumRating').text();
  		Session.set('clickedImageRating', rating);
  		Session.set('clickedImageNumRating', numRating);
  	}

});

}












