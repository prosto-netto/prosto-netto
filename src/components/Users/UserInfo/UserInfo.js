import React from 'react';
import styles from './UserInfo.module.css'

export const UserInfo = (props) => {
	return (
		<div className={`${styles.infoWrapper}`}>
			<div className={`${styles.personalBlock}`}>
				<p className={`${styles.userName}`}>{props.name}</p>
				<p className={`${styles.status}`}>{props.status}</p>
			</div>
			<div className={`${styles.locationBlock}`}>
				<p>Minsk</p>
				<p>Belarus</p>
			</div>
		</div>
	)
}