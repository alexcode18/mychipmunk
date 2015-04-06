App.Views.BingView = Backbone.View.extend({
	el: '.search_div',
	initialize: function() {
		console.log('reached bingView');
		this.template = HandlebarsTemplates['searchItem'];
		console.log('created template');
	},
	events: {
		'click #search_button': 'search'
	}
});