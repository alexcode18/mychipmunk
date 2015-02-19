App.Views.SessionView = Backbone.View.extend({
	el: '#s_view',
	events: {
		'click #login_submit':'authorize'
	},
	authorize: function() {
		console.log('authorizing');
		if ($('#login_submit').hasClass('disabled') && !(this.$el.data('user-authorized') == true)) {
			return false;
		} else {
			$('#login_submit').addClass('disabled');
		}

		attrs = {
			password: $('input[name="login_password"]').val(),
			email: $('input[name="login_email"]').val()
		};
		User.authorize(attrs, function(err,user) {
			if (err) { 
				self.loginFailure(); 
			} else {
				self.loginSuccess();
			}
		});
		return (this.$el.data('user-authorized') === true);
	},
	loginSuccess: function() {
		this.$el.data('user-authorized', true);
		App.session = new App.Models.Session(attrs);
	},
	loginFailure: function() {
		this.$el.find('input[name="login_email"]').focus();
		$('#login_submit').removeClass('disabled');
	}
});