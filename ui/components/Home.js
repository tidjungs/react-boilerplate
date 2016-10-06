import React, { Component } from 'react'
import styles from './index.scss'

export default class Home extends Component {

	static defaultProps = {
		message: 'Tidjungs'
	}

	render() {
		return (
			<h1 className={styles.greeting}>Welcome to { this.props.message } React Boilerplate</h1>
		)
	}
}