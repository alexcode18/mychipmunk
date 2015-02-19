App.Collections.BearCollection = Backbone.Collection.extend({
	model: App.Models.Bear,
	url: '/bears',
	initialize: function() {

	}
})