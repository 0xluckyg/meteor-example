import '../html/post.html';

if (Meteor.isClient) {

	Template.postPhoto.helpers({

		//Scroll helper for how many people to see the post
		howManyNumberValue: function(){

			if (Session.get('howManyNumberValue') == null) {
				Session.set('howManyNumberValue', 100);
				return Session.get('howManyNumberValue');
			} else {
				return Session.get('howManyNumberValue');
			}
		}
	});

	//Scroll for dynamic input range
	Template.postPhoto.events({
		'input #postPhotoRatingRange': function(event){
	    	var howManyValue = event.currentTarget.value;
	    	console.log(howManyValue);
	     	Session.set('howManyNumberValue', howManyValue);
	  	}
	});

}