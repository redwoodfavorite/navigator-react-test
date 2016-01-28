import React, { Component } from 'react'

export default class ReactContentView extends Component {
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

	toggleExpand() {
		this.props.injector._mappings['njs|']._value.request('myapp/page3/expand')
	}

	render() {
		return (
      <section style={this.state.style} className="page-content react">
        {this.props.children}
				<button onClick={this.toggleExpand.bind(this)}>expand</button>
      </section>
		);
	}
};
