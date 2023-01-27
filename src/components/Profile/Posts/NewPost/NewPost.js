import React from 'react'
import styles from './NewPost.module.css'

export const NewPost = ({ addPost, updatePost, newPostText }) => {
	return (
		<div className={styles.newpost}>
			<textarea
				tabIndex={0}
				className={styles.newpost__field}
				rows='3' cols='90'
				onChange={e => updatePost(e.target.value)}
				placeholder='Type here some news'
				value={newPostText} />

			<button
				onClick={() => addPost()}
				className={`${styles.newpost__button}`}>
				<span className={styles.newpost__buttonText}>Опубликовать</span>
			</button>
		</div>
	)
}