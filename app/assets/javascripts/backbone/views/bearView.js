App.Views.BearView = Backbone.View.extend({
	el: '.bear_box',
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
		'click .raise-hunger': function(){this.raiseBar(5,'hunger');}
	},
	bearData: function() {
		// var bearName = this.model.get('name');
		// var bearImage = $('<div>')
		// var bearDiv = $('<div id="bear_container">');
		// var talkDiv = $('<div>').addClass('bear_talk').attr('id', 'talk_div').addClass('glyphicon glyphicon-heart');
		
		// bearDiv.append(talkDiv);
		// this.$el.append(bearDiv);
		this.$el.html(this.template(this.model.toJSON()));
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
		console.log('raised ' + arg);
		var newArg;
		if (this.model.get(arg) <= 90) {
			newArg = this.model.get(arg) + num;
			console.log('raised if statement for ' + arg);
		} else if (this.model.get(arg) + num >= 100) {
			var raiseNum = 100 - this.model.get(arg);
			newArg = this.model.get(arg) + raiseNum;
		}

		if (arg == 'energy') {
			App.bear.set({
				energy: newArg
			});
		} else if (arg == 'happiness') {
			App.bear.set({
				happiness: newArg
			});
		} else if (arg == 'hunger') {
			App.bear.set({
				hunger: newArg
			});
		}
		App.bear.save();
	},
	lowerBar: function(num, stat) {
		var newStat = this.model.get(stat);

		if (this.model.get(stat) != 0) {
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
	}
})