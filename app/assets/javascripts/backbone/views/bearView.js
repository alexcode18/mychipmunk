App.Views.BearView = Backbone.View.extend({
	el: '#bear_land',
	initialize: function() {
		console.log('reached BearView');
		var bear = this.model;
		this.listenTo(this.model,'change', this.renderFeelings);
		this.template = HandlebarsTemplates['bear'];
		this.bearData();
		this.render = _.bind(this.render, this);
		this.model.bind('change:hunger', this.render);
		this.model.bind('change:happiness', this.render);
    this.model.bind('change:energy', this.render);
    this.bearBlink();
	},
	events: {
		'click .raise-happiness': function(){this.raiseBar(5,'happiness');},
		'click .raise-energy': function(){this.raiseBar(5,'energy');},
		'click .raise-hunger': function(){this.raiseBar(5,'hunger');},
		'click .open_sidebar_btn': 'openSidebar'
	},
	bearData: function() {
		// var bearName = this.model.get('name');
		// var bearImage = $('<div>')
		// var bearDiv = $('<div id="bear_container">');
		// var talkDiv = $('<div>').addClass('bear_talk').attr('id', 'talk_div').addClass('glyphicon glyphicon-heart');
		
		// bearDiv.append(talkDiv);
		// this.$el.append(bearDiv);
		this.$el.find('.bear_box').html(this.template(this.model.toJSON()));
		this.feelingsCounter();
	},
	feelingsCounter: function() {
		var bearID = this.model.attributes.id;
		var bear = this.model;
		this.renderFeelings();
		var that = this;
		setInterval(function(){
			var newEnergy = that.lowerBar(1,'energy');
			var newHappiness = that.lowerBar(1,'happiness');
			var newHunger = that.lowerBar(1,'hunger');

			App.bear.set({
				energy: newEnergy,
				happiness: newHappiness,
				hunger: newHunger
			});
			App.bear.save();	
		}, 86000);
	},
	renderFeelings: function() {
		$('#energy').css('width', this.model.get('energy') + '%');
		$('#happiness').css('width', this.model.get('happiness') + '%');
		$('#hunger').css('width', this.model.get('hunger') + '%');
	},
	raiseBar: function(num, arg) {
		
		var newArg;

		if (this.model.get(arg) < 100) {
			console.log('raised ' + arg);
			if (this.model.get(arg) <= 95) {
				newArg = this.model.get(arg) + num;
				console.log('raised if statement for ' + arg);
			} else if (this.model.get(arg) + num >= 95) {
				newArg = 100;
			}

			if (arg == 'energy') {
				this.model.set({
					energy: newArg
				});
			} else if (arg == 'happiness') {
				this.model.set({
					happiness: newArg
				});
			} else if (arg == 'hunger') {
				this.model.set({
					hunger: newArg
				});
			}
			this.model.save();
		}
		
	},
	lowerBar: function(num, stat) {
		var newStat = this.model.get(stat);
		// need to not allow progress to go below 10%
		// 
		if (this.model.get(stat) != 20) {
			newStat = this.model.get(stat) - num;
		}
		return newStat;
	},
	bearBlink: function() {
		setInterval(function(){
			$('.eye').css('visibility','visible');
		}, 1000);
		setInterval(function(){
			$('.eye').css('visibility','hidden');
		}, 6000);
		// setInterval(function(){
		// 	$('#bear_body').animate({top: 20});
		// }, 200);
		// setInterval(function(){
		// 	$('#bear_body').animate({top: 0});
		// }, 400);
		// $('#bear_body').animate('top',0);
	},
	openSidebar: function() {
		$('#sidebar').toggle(900);
		$('.bear_box').toggleClass('col-xs-9 col-md-9');
		$('header').toggleClass('col-xs-9 col-md-9');
	}
})