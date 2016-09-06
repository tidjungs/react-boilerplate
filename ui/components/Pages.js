import React, { Component, PropTypes } from 'react'
import Page from './Page'

export default class Pages extends Component {

	static propTypes = {
    	pages: PropTypes.array.isRequired
  	}

	render() {
		
		const rowElement = this.props.pages.map((page) => 
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