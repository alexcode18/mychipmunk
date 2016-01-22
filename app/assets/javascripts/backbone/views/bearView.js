App.Views.BearView = Backbone.View.extend({
	el: '#bear_screen',
	initialize: function() {
		console.log('reached BearView');
		var bear = this.model;
		this.listenTo(this.model,'change', this.renderFeelings);
		this.template = HandlebarsTemplates['bear'];
		this.bearData();
		this.render = _.bind(this.render, this);

		if (this.model.attributes.id != 'adoptable') {
			this.model.bind('change:hunger', this.render);
			this.model.bind('change:happiness', this.render);
		    this.model.bind('change:energy', this.render);
		} else if (this.model.attributes.id == 'adoptable') {
			$('.bear_box').attr('id', this.model.attributes.id);
		}
		
	    this.bearBlink();
	    this.droppableMouth();
    	// $('input[name="search"]').val('bear');
		// search();

	},
	events: {
		'click .raise-happiness': function(){this.raiseBar(5,'happiness');},
		'click .raise-energy': function(){this.raiseBar(5,'energy');},
		'click .raise-hunger': function(){this.raiseBar(5,'hunger');}
		// 'mousedown .food': function(){this.draggableObj();}
	},
	bearData: function() {
		console.log('this.model.attributes.id: ' + this.model.attributes.id);
		if (this.model.attributes.id != 'adoptable') {
			this.$el.find('.bear_box').html(this.template(this.model.toJSON()));
		} else if (this.model.attributes.id == 'adoptable') {
			this.$el.find('.bear_box').html(this.template(this.model));
		}
		
		this.feelingsCounter();
	},
	feelingsCounter: function() {

		var bearID = this.model.attributes.id;
		var bear = this.model;
		var that = this;

		this.renderFeelings();

		setInterval(function(){
			var newEnergy = that.lowerBar(1,'energy');
			var newHappiness = that.lowerBar(1,'happiness');
			var newHunger = that.lowerBar(1,'hunger');
			if (this.model.attributes.id != 'adoptable') {
				App.bear.set({
					energy: newEnergy,
					happiness: newHappiness,
					hunger: newHunger
				});

				App.bear.save();	
			}	
		}, 86000);
		
	},
	renderFeelings: function() {

		if (this.model.attributes.id != 'adoptable') {
			$('#energy').css('width', this.model.get('energy') + '%');
			$('#happiness').css('width', this.model.get('happiness') + '%');
			$('#hunger').css('width', this.model.get('hunger') + '%');
		} else if (this.model.attributes.id == 'adoptable') {
			console.log('reached none or adoptablle bars');
			$('#energy').css('width', this.model.attributes.energy + '%');
			$('#happiness').css('width', this.model.attributes .happiness + '%');
			$('#hunger').css('width', this.model.attributes.hunger + '%');
		}
	},
	raiseBar: function(num, arg) {

		if (this.model.attributes.id != 'adoptable') {
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
		} else if (this.model.attributes.id == 'adoptable') {
			if (this.model['attributes'][arg] < 100) {
				console.log('raised ' + arg);
				if (this.model['attributes'][arg] <= 95) {
					this.model['attributes'][arg] = this.model['attributes'][arg] + num;
					console.log('raised if statement for ' + arg);
				} else if (this.model['attributes'][arg] + num >= 95) {
					this.model['attributes'][arg] = 100;
				}

			}
		}
		
	},
	lowerBar: function(num, stat) {
		var newArg;

		if (this.model.attributes.id != 'adoptable') {
			if (this.model.get(stat) != 20) {
				if (this.model.attributes.id != 'adoptable') {
					var newStat = this.model.get(stat);
					newStat = this.model.get(stat) - num;
				} else if (this.model.attributes.id == 'adoptable') {
					var newStat = this.model.attributes.stat;
					newStat = (this.model.attributes.stat) - num;
				}
			}
			return newStat;
		} else if (this.model.attributes.id == 'adoptable') {
			if (this.model['attributes'][stat] < 100) {
				console.log('raised ' + stat);
				if (this.model['attributes'][stat] <= 95) {
					this.model['attributes'][stat] = this.model['attributes'][stat] - num;
					console.log('raised if statement for ' + stat);
				} else if (this.model['attributes'][stat] + num >= 95) {
					this.model['attributes'][stat] = 100;
				}
			}
		}
		// need to not allow progress to go below 10%
		// 
		
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
	draggableObj: function() {
		console.log(this);
		$(this).draggable({
			helper: 'clone'
		});
		console.log('getting past clone');
	},
	droppableMouth: function() {
		var that = this;
		$('.mouth').droppable({
			accept: '.food',
			hoverClass: 'wide-mouth',
			drop: function(event, ui) {
				var drg = ui.helper;
				that.raiseBar(5,'hunger');
			}
		});
	}
})



