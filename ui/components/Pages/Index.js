import React, { Component, PropTypes } from 'react'
import Page from './Page'

const Pages = ({ pages, onReloadPages }) => (
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
	      		{ 
	      			pages.map((page) => (
	      				<Page title={ page.title } 
							key={ page.id }
							id={ page.id } />
	      			)) 
	      		}
	        </tbody>
	    </table>
    </div>
)

Pages.propTypes = {
	pages: PropTypes.array.isRequired,
	onReloadPages: PropTypes.func.isRequired
}

export default Pages
