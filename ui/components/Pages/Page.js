import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Page extends Component {
	
	static propTypes = {
		title: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	}

	render() {
		const { id, title } = this.props
		return (
			<tr>
				<th>{ id }</th>
	         	<td>{ title }</td>
	         	<td>
	         		<Link to={{ pathname: `pages/${id}` }}>Show</Link> 
	         	</td>
			</tr>
		)
	}
}