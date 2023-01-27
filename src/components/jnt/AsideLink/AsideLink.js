import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AsideLink.module.css'

export const AsideLink = ({ path, name }) => {

	return (
		<NavLink className={({ isActive }) => (isActive ? styles.aside__link_active : styles.aside__link)} to={path}>{name}</NavLink>
	)
}