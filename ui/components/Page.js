import React, { Component } from 'react'
import index from './index.scss'

export default class Page extends Component {
	render() {
		return (
			<h1 className={index.greeting}>Page</h1>
		)
	}
}