import React from 'react'
import styles from './ProfileInfo.module.css'
import { Avatar } from '../../jnt/Avatar/Avatar'

export const ProfileInfo = ({ info }) => {
	return (
		<div className={styles.profileInfo}>
			<Avatar profilePhoto={info.picture} size='7' />
			<div className={styles.profileInfo__data}>
				<p>{info.name}</p>
				<p>{info.dob}</p>
				<p>{`${info.location.city}, ${info.location.country}`}</p>
				<p>{info.status}</p>
			</div>
		</div>
	)
}