import React, { Component } from 'react'

export default class Page3 extends Component {
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
		console.log(1);
		return (
			<div className="padded react2">REACT IN REACT</div>
		);
	}
};
