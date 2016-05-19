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

		this.route('signup', {
			path: '/signup',
			template: 'signup',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Sign up",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Sign up';
			},
			data: function() {

			}
		});


		this.route('ranking', {
			path: '/ranking',
			template: 'ranking',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Ranking",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Ranking';
			},
			data: function() {

			}
		});

		this.route('home', {
			path: '/home',
			template: 'home',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Home",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Sign up';
			},
			data: function() {

			}
		});

	});
});