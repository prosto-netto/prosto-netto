import React from 'react'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { Posts } from './Posts/Posts'
import banner from '../../assets/img/banner.jpg'
import styles from './Profile.module.css'

export const Profile = props => {
	return (
		<>
			<div className={`${styles.banner}`} style={{ backgroundImage: `url(${banner})` }} />
			<ProfileInfo info={props.profile.info} />
			{props.profile.posts && <Posts postItems={props.profile.posts.postItems} />}
		</>
	)
}