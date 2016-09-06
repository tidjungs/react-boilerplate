import React, { Component } from 'react'
import '../theme/element.scss'


export default class Page extends Component {
	render() {
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
	          <tr>
	            <th>1</th>
	            <td>Title Page#1</td>
	            <td>
	              <a href='javascript:void(0)'>Show</a>
	            </td>
	          </tr>
	        </tbody>
	      </table>
	    )
	}
}