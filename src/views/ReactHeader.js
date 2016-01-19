import React, { Component } from 'react'

export default class Page2 extends Component {
	constructor(props) {
		super(props);
	}

	get navigatorBehaviors() {
		return ['IHasStateTransition'];
	}

	transitionIn(callOnComplete) {
		callOnComplete();
	}

	transitionOut(callOnComplete) {
		callOnComplete();
	}

	render() {
		return (
			<header className="react app-header">THIS IS HEADER IS ADDED USING A SELECTOR</header>
		);
	}
};
