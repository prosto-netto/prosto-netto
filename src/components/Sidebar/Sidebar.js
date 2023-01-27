import React from 'react'
import { AsideLink } from '../jnt/AsideLink/AsideLink'
import styles from './Sidebar.module.css'

export const Sidebar = ({ asideLinks }) => {

	return (
		<aside className={`${styles.sidebar}`}>
			<nav className={`${styles.sidebar__nav} ${styles.sidebar__block}`}>
				{
					asideLinks.map(({ path, name, id }) => (<AsideLink path={path} name={name} key={id} />))
				}
			</nav>
		</aside>
	)
}