import React, { Component } from 'react'

export default class Page3 extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	static get navigatorBehaviors() {
		return ['IHasStateTransition'];
	}

	transitionIn(callOnComplete) {
		this.setState({ style: { display: '' }});
		callOnComplete();
	}

	transitionOut(callOnComplete) {
		this.setState({ style: { display: 'none' }});
		callOnComplete();
	}

	render() {
		return (
			<div
			style={this.state.style}
			className="padded react2">
				REACT IN REACT
			</div>
		);
	}
};
