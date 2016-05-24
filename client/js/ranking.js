import { Template } from 'meteor/templating';
 
import '../html/ranking.html';

Template.photoClick.helpers({
	
  comments: [
    { text: 'This is comment 1 This is comment 1 This is comment 1 This is comment 1 This is comment 1 ', name: 'Scott', time: '10/20/2015'},
    { text: 'This is comment 2 This is comment 2 This is comment 2 This is comment 2', name: 'Gilfoyle', time: '10/20/2015'},
    { text: 'This is comment 3', name: 'Jay', time: '10/20/2015'},
    { text: 'This is comment 4 This is comment 4 ', name: 'Dinesh', time: '10/20/2015'},
    { text: 'This is comment 5 This is comment 5 This is comment 5 This is comment 5 This is comment 5 This is comment 5 This is comment 5 ', name: 'McLovin', time: '10/20/2015'},
    { text: 'This is comment 6', name: 'Richard', time: '10/20/2015'}
  ]

});

Template.ranking.helpers({

  images: [
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' },
  	{ image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg' }

  ]

});