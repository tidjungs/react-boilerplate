import React, { Component } from 'react'

export default class Page extends Component {
	render() {
		const { page } = this.props
		return (
			<tr key={ page.id }>
				<th>{page.id}</th>
	         	<td>{page.title}</td>
	         	<td>
	         		<a href='javascript:void(0)'>Show</a>
	         	</td>
			</tr>
		)
	}
}