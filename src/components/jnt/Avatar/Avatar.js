import React from 'react';
import styles from './Avatar.module.css';


export const Avatar = (props) => {

	return (
		<div className={`${styles.avatar} ${styles['avatar_size_' + props.size]}`}>
			<img className={styles.avatar__image} src={props.profilePhoto} alt='avatar' />
		</div>
	)
}