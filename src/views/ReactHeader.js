import React, { Component } from 'react'

export default class Header extends Component {
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
			<header
			style={this.state.style}
			className="react app-header">
				THIS IS HEADER IS ADDED USING A SELECTOR
			</header>
		);
	}
};
