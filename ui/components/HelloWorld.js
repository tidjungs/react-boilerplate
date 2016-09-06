import React, { Component } from 'react'
import index from './index.scss'

export default class HelloWorld extends Component {
	render() {
		return (
			<h1 className={index.greeting}>Hello World</h1>
		)
	}
}