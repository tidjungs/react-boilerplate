import React, { Component, PropTypes } from 'react'
import Page from './Page'

export default class Pages extends Component {

	static propTypes = {
    	pages: PropTypes.array.isRequired,
    	onReloadPages: PropTypes.func.isRequired
  	}

	render() {
		
		const { pages, onReloadPages } = this.props

		const rowElement = pages.map((page) => 
			<Page title={ page.title } 
				key={ page.id }
				id={ page.id } />
		)

		return (
			<div>
				<button 
		        	className='button'
		        	onClick={() => onReloadPages()}>
		        	Reload Pages
		        </button>
		        <hr />
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
		     </div>
	    )
	}
}