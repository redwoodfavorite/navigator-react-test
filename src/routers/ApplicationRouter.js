import LocalizationModel from '../models/LocalizationModel';
import React from 'react';
import ReactHeader from '../views/ReactHeader';
import FooterView from '../views/FooterView';
import ReactContent from '../views/ReactContent';
import TabsView from '../views/TabsView';
import ShowcaseView from '../views/ShowcaseView';
import Page1View from '../views/pages/Page1View';
import Page2View from '../views/pages/Page2View';
import Page3View from '../views/pages/Page3View';
import Page4View from '../views/pages/Page4View';
import navigator from 'imports?define=>false!navigator-js';
import ReactContentView from '../views/ReactContentView';

export default Backbone.CommandRouter.extend({
	$el: null,

	njs: null,
	stateViewMap: null,
	stateUrlSyncer: null,

	routes: {
		'': ''
	},

	initialize(options) {
		this.$el = options.$el;

		this.initializeNavigator();
		this.mapModels();
		this.mapStates();

		var urlState = this.stateUrlSyncer.getUrlState();

		this.njs.start(urlState.equals('') ? 'myapp/page1' : urlState);
	},

	mapModels() {
		this.injector
			.map('localizationModel')
			.toSingleton(LocalizationModel);
	},

	mapStates() {
		const navigationStates = ['myapp', 'myapp/page1', 'myapp/page2', 'myapp/page3'];

		// Should be able to add React element directly to DOM element
		// based on querySelector

		this.stateViewMap
			.mapState('myapp')
			.toComponent(ReactHeader)
			.withArguments({ injector: this.injector })
			.inside('header');

		this.stateViewMap
			.mapState('myapp')
			.toView(TabsView)
			.withArguments({ injector: this.injector });

		const contentBlockRecipe = (
			this.stateViewMap
				.mapState(['myapp/page1', 'myapp/page2'])
				.toView(ShowcaseView)
				.withArguments({ injector: this.injector })
		);

		const reactContentBlockRecipe = (
			this.stateViewMap
				.mapState('myapp/page3')
				.toComponent(ReactContentView)
				.withArguments({ injector: this.injector })
		);

		const page1Recipe = this.stateViewMap
			.mapState('myapp/page1')
			.toView(Page1View)
			.withArguments({ injector: this.injector })
			.withParent(contentBlockRecipe);

		this.stateViewMap
			.mapState('myapp/page2')
			.toComponent(Page2View)
			.withArguments({ injector: this.injector })
			.withParent(contentBlockRecipe);

		this.stateViewMap
			.mapState('myapp/page3')
			.toComponent(Page3View)
			.withArguments({ injector: this.injector, key: 1 })
			.withParent(reactContentBlockRecipe);

			this.stateViewMap
				.mapState('myapp/page3/expand')
				.toComponent(Page4View)
				.withArguments({ injector: this.injector, key: 2 })
				.withParent(reactContentBlockRecipe);
	},

	initializeNavigator() {
		this.njs = new navigatorjs.Navigator();
		this.stateViewMap = new navigatorjs.integration.StateViewMap(this.njs, this.$el);

		this.stateUrlSyncer = new navigatorjs.integration.StateUrlSyncer(this.njs);
		this.stateUrlSyncer.usePushState();
		this.stateUrlSyncer.start();

		this.injector.map('njs').toValue(this.njs);
	}
});
