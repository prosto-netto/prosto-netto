import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './FriendsGallery.module.css'


export const FriendsGallery = (props) => {

	let friends = props.friendsLinks
		.map(friend => {
			return (
				<NavLink className={styles.friends__avatar} to={friend.path} key={friend.id} >
					<img className={`${styles.friends__img}`} src={`img/avatars/${friend.source}`} title={friend.name} alt='' />
				</NavLink>
			)
		})

	return <div className={`${styles.friends__gallery}`}>{friends}</div>
}