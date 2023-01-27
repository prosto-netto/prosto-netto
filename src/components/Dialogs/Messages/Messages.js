import React from 'react'
import MessageItem from './MessageItem/MessageItem'
import styles from './Messages.module.css'

export const Messages = ({ messageItems }) => {

	return (
		<section className={styles.messages}>
			{
				messageItems.map(
					({ text, author }, index) => {
						return (
							<MessageItem text={text} align={author ? 'left' : 'right'} key={index} />
						)
					}
				)
			}
		</section>
	)
}