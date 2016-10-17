import React, { Component } from 'react'

class NewPageContainer extends Component {
	render() {
		return (
			<div>
				<h4>Title</h4>
				<input type='text' placeholder='Enter Title' />
				<h4>Content</h4>
				<input type='text' placeholder='Enter Content' />
			</div>
    )
	}
}

const mapStateToProps = (state) => ({
	pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {    
  	dispatch(loadPages())
  }
})

export default NewPageContainer;

