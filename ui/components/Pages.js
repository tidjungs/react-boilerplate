import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'

export default class Pages extends Component {

	state = {
		pages: []
	}

	componentDidMount() {
		fetch('http://127.0.0.1:5000/api/v1/pages')
		.then((response) => response.json())
		.then((pages) => this.setState({ pages }))
	}

	render() {
		
		const rowElement = this.state.pages.map((page) => 
			<Page title={ page.title } 
				key={ page.id }
				id={ page.id } />
		)

		return (
	      <table className='table'>
	      	<thead>
	          <tr>
	            <th>ID</th>
	            <th>Title</th>
	            <th>Action</th>
	          </tr>
	        </thead>
	        <tbody>
	      		{ rowElement }
	        </tbody>
	      </table>
	    )
	}
}