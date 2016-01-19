import React, { Component } from 'react'

export default class Page2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};
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
			<div className="react padded">React inside backbone</div>
		);
	}
};
