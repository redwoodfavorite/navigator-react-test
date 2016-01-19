import React, { Component } from 'react'

export default class Tabs extends Component {
		constructor(props) {
			super(props)

			this.navigatorBehaviors = ['dddddd']
		}

		render() {
			return (
        <nav>
          <ul className="page-tabs backbone">
            <li><a href="javascript:;">page1</a></li>
            <li><a href="javascript:;">page2</a></li>
            <li><a href="javascript:;">page3</a></li>
          </ul>
        </nav>
			);
		}

		transitionIn() {
			console.log('transitionIn')
		}
};
