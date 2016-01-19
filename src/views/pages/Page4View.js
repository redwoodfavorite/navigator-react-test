import React, { Component } from 'react'

export default class Page4 extends Component {
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
    console.log(2)
		return (
			<div className="padded react2">REssssN REACT</div>
		);
	}
};
