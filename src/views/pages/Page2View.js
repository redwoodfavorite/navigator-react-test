import React, { Component } from 'react'

export default class Page2 extends Component {
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
			className="react padded">
				React inside backbone
			</div>
		);
	}
};
