import React, { Component } from 'react'

export default class Page2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};
	}

	static get navigatorBehaviors() {
		return ['IHasStateTransition'];
	}

	transitionIn(callOnComplete) {
		callOnComplete();
	}

	transitionOut(callOnComplete) {
		callOnComplete();
	}

	render() {
		const style = {
			display: this.state.visible ? '' : 'none'
		};

		return (
			<div>
				{"THIS IS SOME REACT CONTENT IN A BACKBONE VIEW WITH A SELECTOR"}
				{this.props.children}
			</div>
		);
	}
};
