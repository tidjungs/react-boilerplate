import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Header.scss'

export default class Header extends Component {
	render() {
		return (
			<header className={ styles.header }>
				<nav>
					<Link 
						to={{ pathname: '/' }} 
						className={ styles.brand }>
						Tidjungs React Boilerplate
					</Link>
					<ul className={ styles.menu }>
						<li className={ styles.menu__item }>
							<Link
								to={{ pathname: '/page' }}  
								className={ styles.menu__link }>
								Page
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}