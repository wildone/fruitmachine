FruitMachine.View.extend('orange', {

	initialize: function() {
		var self = this;

		// Bind the view context to this function.
		this.onItemClickBound = function() {
			self.onItemClick.apply(self, arguments);
		};
		this.on('setup', this.onSetup, this);
	},

	onSetup: function() {
		this.delegate = new Delegate(this.el);
		this.delegate.on('click', '.module-orange_body', this.onItemClickBound);
	},

	onTeardown: function() {
		this.delegate = new Delegate(this.el);
		this.delegate.off(this.onItemClickBound);
	},

	onItemClick: function(event, target) {
		alert('article body click');
	}
});