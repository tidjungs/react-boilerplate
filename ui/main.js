import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
	App,
	HelloWorld,
	Page
} from './components'

render((
	<Router history={ browserHistory }>
		<Route path='/' component={ App }>
      		<IndexRoute component={ HelloWorld } />
      		<Route path='page' component={ Page } />
    	</Route>
	</Router>
), document.getElementById('app'))