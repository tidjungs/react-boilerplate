import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
	App,
	Home
} from './components'

import { 
  Pages,
  ShowPage,
  NewPage
} from './containers'

export default () => {
  return (
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <route path='pages'>
          <IndexRoute component={ Pages } />
          <route path='new' component={ NewPage } />
          <route path=':id' component={ ShowPage } />
        </route>
      </Route>
    </Router>
  )
}