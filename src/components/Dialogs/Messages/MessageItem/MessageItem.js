import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = (props) => {

	let align = `messageItem_textAlign_${props.align}`

	return (
		<div className={`${styles.messageItem} ${styles[align]}`}>
			{props.text}
		</div>
	)
}

export default MessageItem