App.Collections.UserCollection = Backbone.Collection.extend({
	model: App.Models.User,
	url: '/users',
	initialize: function() {

	}
})