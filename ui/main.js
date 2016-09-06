import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './theme/element.scss'


render(routes(), document.getElementById('app'))