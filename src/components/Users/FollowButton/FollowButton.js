import React from 'react';
import styles from './FollowButton.module.css'

export const FollowButton = props => {
	return (


		props.isFollowed
			? <button
				onClick={() => props.onUnfollowButtonClick(props.userID)}
				disabled={props.isFollowingProgress.some(id => id === props.userID)}
				className={`${styles.unfollow}`}>Unfollow</button >
			: <button
				onClick={() => props.onFollowButtonClick(props.userID)}
				disabled={props.isFollowingProgress.some(id => id === props.userID)}
				className={`${styles.follow}`}>Follow</button>
	)
}
