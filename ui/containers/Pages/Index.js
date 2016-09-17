import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Pages } from '../../components'

//actions
import { loadPages } from '../../actions/page'

class PagesContainer extends Component {
	static propTypes = {
    	pages: PropTypes.array.isRequired,
    	onLoadPages: PropTypes.func.isRequired
  	}

	shouldComponentUpdate(nextProps) {
    	return this.props.pages !== nextProps.pages;
  	}

	onReloadPages = () => {
		this.props.onLoadPages()
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
  	dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)

