import template from '../templates/tabs';

export default Backbone.View.extend({

	localizationModel: 'inject',
	njs: 'inject',

	className: 'backbone',

	navigatorBehaviors: ["IHasStateTransition"],

	initialize(options) {
		this.render();

		this.$el.click(this.handleClick.bind(this));
	},

	handleClick(e) {

		/*
			Need to fix this but for some reason can't read from element
			attribute?? element.getAttribute('datatab') ???
		*/

		var destination = e.toElement.innerText.replace(' ', '').toLowerCase();

		this.njs.request("myapp/" + destination);
	},

	transitionIn(callOnComplete) {
		callOnComplete();
	},

	transitionOut(callOnComplete) {
		callOnComplete();
	},

	render() {

		this.$el.html(template({
			page1: this.localizationModel.get('page1').title,
			page2: this.localizationModel.get('page2').title,
			page3: this.localizationModel.get('page3').title
		}));
	}
})
