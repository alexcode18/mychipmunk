App.Models.Session = Backbone.Model.extend({
	urlRoot: '/sessions',
	initialize: function() {
		console.log('created new session');
		this.create();
	},
	create: function() {
		console.log('made it to session create function');
		this.fetch({
			type: 'GET',
			data: { email: attrs[email],
							password: attrs[password] },
			success: _.bind(function(e){
				console.log(e);
			},this)
		})
	}
})