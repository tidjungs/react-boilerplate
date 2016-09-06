import React, { Component } from 'react'
import styles from './index.scss'

export default class HelloWorld extends Component {

	static defaultProps = {
		message: 'Tidjungs'
	}

	render() {
		return (
			<h1 className={styles.greeting}>Hello { this.props.message }</h1>
		)
	}
}