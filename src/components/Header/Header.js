import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logo-blue-dark.png';
import { NavLink } from 'react-router-dom';

export const Header = props => {
	return (
		<header className={`${styles.header} ${styles.header_display_flex}`}>
			<div className={`${styles.header__logo} ${styles.header__logo_align_left}`}>
				<img className={styles.header__logoImage} src={logo} alt='logo' />
			</div>
			{props.isAuth
				? <span className={styles.login}>{props.login}</span>
				: <NavLink className={styles.unauth} to='/login' >Login</NavLink>
			}
		</header>

	)
}