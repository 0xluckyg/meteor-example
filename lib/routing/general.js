Meteor.startup(function () {
	Router.configure({
		notFoundTemplate: 'notFound',
		loadingTemplate: 'loader'
	});

	Router.map(function() {
		this.route('splash', {
			path: '/',
			template: 'splashTemplate',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Welcome to Joqur",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Welcome to Joqur';
			},
			data: function() {

			}
		});
		
		this.route('login', {
			path: '/login',
			template: 'loginTemplate',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Log in",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Log in';
			},
			data: function() {

			}
		});




	});
});