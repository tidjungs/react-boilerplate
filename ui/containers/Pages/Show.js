import React, { Component, PropTypes } from 'react'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { ShowPage } from '../../components'
import { connect } from 'react-redux'
import { loadPage } from '../../actions/page'
import { getPageById } from '../../reducers/pages'

class ShowPageContainer extends Component {
	static propTypes = {
    	page: PropTypes.object.isRequired,
    	onLoadPage: PropTypes.func.isRequired
  	}

	shouldComponentUpdate(nextProps) {
    	return this.props.page !== nextProps.page;
  	}

  	componentDidMount() {
		const { onLoadPage, params: { id } } = this.props
    	onLoadPage(id)
  	}

  	render() {
    	const { id, title, content } = this.props.page
		return (
			<ShowPage
	      		id={id}
	      		title={title}
	      		content={content} />
	    )
  	}
}

const mapStateToProps = (state, ownProps) => ({
 	page: getPageById(state, ownProps.params.id)
})

export default connect(
  mapStateToProps,
  { onLoadPage: loadPage }
)(ShowPageContainer)
