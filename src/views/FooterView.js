import template from '../templates/footer';

module.exports = Backbone.View.extend({

	navigatorBehaviors: ["IHasStateTransition"],

	tagName: 'footer',
	className: 'app-footer',

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
