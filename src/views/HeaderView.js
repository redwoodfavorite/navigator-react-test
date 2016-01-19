import template from '../templates/header';

module.exports = Backbone.View.extend({

	navigatorBehaviors: ["IHasStateTransition"],

	className: 'backbone app-header',
	tagName: 'header',

	initialize(options) {
		this.render();
	},

	render() {
		this.$el.html(template({}));
	},

	transitionIn(callOnComplete) {
		callOnComplete();
	},

	transitionOut(callOnComplete) {
		callOnComplete();
	}
});
