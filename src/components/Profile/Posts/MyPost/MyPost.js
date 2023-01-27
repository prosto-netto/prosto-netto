import React from 'react'
import styles from './MyPost.module.css'

export const MyPost = ({ post, likesCount }) => {
	return (
		<div className={styles.mypost}>
			<p className={`${styles.mypost__text}`}>{post}</p>
			<div className={styles.mypost__like}>
				<span className={styles.mypost__likeHeart}>&#9829;</span>
				<span className={styles.mypost__likeCount}>{likesCount}</span>
			</div>
		</div>
	)
}