import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './theme/element.scss'

import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById('app')

render(
	routes(),
	rootEl
)
