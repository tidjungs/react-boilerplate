import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './theme/element.scss'
import Root from './containers/Root'

import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRootApp = require('./containers/Root').default
    
    render(
      <AppContainer>
        <NextRootApp />
      </AppContainer>,
      rootEl
    )
  })
}
