Meteor.startup(function () {
	Router.configure({
		notFoundTemplate: 'notFound',
		loadingTemplate: 'loader'
	});

	Router.map(function() {

		this.route('splash', {
			path: '/',
			template: 'ranking',
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

		this.route('myPage', {
			path: '/myPage',
			template: 'myPage',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "My Page",
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

		this.route('post', {
			path: '/post',
			template: 'post',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "post",
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