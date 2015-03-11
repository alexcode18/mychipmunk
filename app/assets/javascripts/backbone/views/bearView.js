App.Views.BearView = Backbone.View.extend({
	el: '.bear_box',
	initialize: function() {
		console.log('reached BearView');
		var bear = this.model;
		this.listenTo(this.model,'change', this.renderFeelings);
		this.bearData();
		this.render = _.bind(this.render, this);
		this.model.bind('change:hunger', this.render);
		this.model.bind('change:happiness', this.render);
    this.model.bind('change:energy', this.render);
	},
	events: {

	},
	bearData: function() {
		var bearName = this.model.get('name');
		var bearImage = $('<div>').addClass('bear');
		var talkDiv = $('<div>').text('Hi! My name is ' + bearName + '.').addClass('bear_talk');
		var bearUl = $('<ul id="bear_ul">');
		var bearLi = $('<li id="bear_li">');
		var talkLi = $('<li id="talk_li">');
		bearLi.append(bearImage);
		talkLi.append(talkDiv);
		bearUl.append(bearLi).append(talkLi);
		this.$el.append(bearUl);
		this.feelingsCounter();
	},
	feelingsCounter: function() {
		var bearID = this.model.attributes.id;
		var bear = this.model;
		// var bearBars = $('<ul>').addClass('bear_bar');
		// var energyLi = $('<li>');
		// var happyLi = $('<li>');
		// var hungerLi = $('<li>');
		// var energyBar = $('<div>').attr('id', 'energy').addClass('glyphicon glyphicon-flash');
		// var happyBar = $('<div>').attr('id', 'happy').addClass('glyphicon glyphicon-heart');
		// var hungerBar = $('<div>').attr('id', 'hunger').addClass('glyphicon glyphicon-cutlery');
		// energyLi.append(energyBar);
		// happyLi.append(happyBar);
		// hungerLi.append(hungerBar);
		// bearBars.append(energyLi)
		// 				.append(happyLi)
		// 				.append(hungerLi);
		// $('#bear_stats').append(bearBars);
		this.renderFeelings();
		var that = this;
		// setInterval(function(){
		// 	var newEnergy = that.model.get('energy') - 1;
		// 	var newHappiness = that.model.get('happiness') - 1;
		// 	var newHunger = that.model.get('hunger') - 1;
		// 	console.log(newEnergy);

		// 	App.bear.set({
		// 		energy: newEnergy,
		// 		happiness: newHappiness,
		// 		hunger: newHunger
		// 	});
		// 	App.bear.save();
			
		// }, 9000);//86000
	},
	renderFeelings: function() {
		// $('#energy').css('width', (this.model.get('energy')*2) + 'px');
		// $('#energy').attr('aria-valuenow', this.model.get('energy'));
		$('#energy').css('width', this.model.get('energy') + '%');
		$('#happiness').css('width', this.model.get('happiness') + '%');
		$('#hunger').css('width', this.model.get('hunger') + '%');

		// $('#happy').css('width', (this.model.get('happiness')*2) + 'px');
		// $('#hunger').css('width', (this.model.get('hunger')*2) + 'px');
	},
	getStats: function() {

	},
	raiseHappy: function() {

	},
	raiseHunger: function() {

	},
	raiseSleep: function() {

	}
})