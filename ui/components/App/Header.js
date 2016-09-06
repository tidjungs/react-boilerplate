import React, { Component } from 'react'
import styles from './Header.scss'

export default class Header extends Component {
	render() {
		return (
			<header className={ styles.header }>
				<nav>
					<a href='/' className={ styles.brand }>
						Tidjungs React Boilerplate
					</a>
					<ul className={ styles.menu }>
						<li className={ styles.menu__item }>
							<a href='/page' className={ styles.menu__link }>Page</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}