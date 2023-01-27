import React from 'react'
import { MyPost } from './MyPost/MyPost'
import { NewPostContainer } from './NewPost/NewPostContainer'
import styles from './Posts.module.css'

export const Posts = ({ postItems }) => {

	return (
		<section className={`${styles.posts}`}>
			<NewPostContainer />
			{postItems.map(({ post, likesCount, id }) => <MyPost post={post} likesCount={likesCount} key={id} />)}
		</section>
	)
}