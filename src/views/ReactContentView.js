import React, { Component } from 'react'

export default class ReactContentView extends Component {
	constructor(props) {
		super(props);

		this.state = {};
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

	toggleExpand() {
		this.props.injector._mappings['njs|']._value.request('myapp/page3/expand')
	}

	render() {
		return (
      <section className="page-content react">
        {this.props.children}
				<button onClick={this.toggleExpand.bind(this)}>expand</button>
      </section>
		);
	}
};
