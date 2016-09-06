import React, { Component } from 'react'
import styles from './index.scss'

export default class HelloWorld extends Component {
	render() {
		return (
			<h1 className={styles.greeting}>Hello World</h1>
		)
	}
}