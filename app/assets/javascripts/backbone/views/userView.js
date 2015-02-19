App.Views.UserView = Backbone.View.extend({
	el: 'bear_land',
	initialize: function() {
		console.log('created new user view');
		fetchUserData();
	},
	events: {
	}
})