App.Models.Bear = Backbone.Model.extend({
	urlRoot: '/bears',
	initialize: function(){
		console.log('created new bears model');
	}
})