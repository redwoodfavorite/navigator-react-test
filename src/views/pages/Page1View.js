import template from '../../templates/page';

export default Backbone.View.extend({

	localizationModel: 'inject',

	navigatorBehaviors: ["IHasStateTransition"],

	initialize() {
		this.render();
	},

	render() {
		this.$el.html(
			template({
				content: this.localizationModel.get('page1').content
			})
		);
	},

	transitionIn(callOnComplete) {
		callOnComplete();

		this.$el.css({ display: '' });
	},

	transitionOut(callOnComplete) {
		callOnComplete();

		this.$el.css({ display: 'none' });
	}

});
