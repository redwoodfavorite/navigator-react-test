import template from '../templates/showcase';

module.exports = Backbone.View.extend({

	navigatorBehaviors: ["IHasStateTransition"],

	tagName: 'section',
	className: 'page-content backbone',

	initialize(options) {
		this.render();
	},

	render() {
		this.$el.html(template({}));
	},

	transitionIn(callOnComplete) {
		this.$el.show();
		callOnComplete();
	},

	transitionOut(callOnComplete) {
		this.$el.hide();
		callOnComplete();
	}
});
