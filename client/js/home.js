import {Template} from 'meteor/templating';
import { Session } from 'meteor/session';

import '../html/home.html';

if (Meteor.isClient) {

	Template.home.helpers({
		
		sliderValueIs: function(){
			return Session.get('sliderValueIs');
		},
			
		homePhotoShade: function(){
			return Session.get('homePhotoShade');
		},

		//Showing login/signup templates
		loginTemplate: function() {
            return Session.get('loginTemplate');
        },

        signupTemplate: function() {
            return Session.get('signupTemplate');
        }

	});

	//Show the slider value on the photo when the user scrolls
	Template.home.events({
	  'input #homeRange': function(event){
		     var sliderValue = event.currentTarget.value;
		     Session.set('sliderValueIs', sliderValue);
		     Session.set('homePhotoShade', true);
		}
	});

}