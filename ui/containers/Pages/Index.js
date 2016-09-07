import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Pages } from '../../components'
import { PAGES_ENDPOINT } from '../../constants/endpoints'

//actions
import { loadPage } from '../../actions/page'

class PagesContainer extends Component {

	// state = {
	// 	pages: []
	// }

	shouldComponentUpdate(nextProps) {
    	return this.props.pages !== nextProps.pages;
  	}

	onReloadPages = () => {
		this.props.onLoadPages()
		// fetch(PAGES_ENDPOINT)
		// 	.then((response) => response.json())
		// 	.then((pages) => this.setState({ pages }))
	}

	componentDidMount() {
		this.onReloadPages()
	}
	
	render() {
    	return( 
    		<Pages 
    			pages={ this.props.pages } 
    			onReloadPages={ this.onReloadPages } />
    	)
 	}
}

const mapStateToProps = (state) => ({
	pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {    
  	dispatch(loadPage())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)

