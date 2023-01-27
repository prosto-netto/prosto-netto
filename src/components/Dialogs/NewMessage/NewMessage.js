import React from 'react';
import styles from './NewMessage.module.css'

export const NewMessage = props => {

	return (
		<section className={`${styles.newMessage}`}>
			<textarea className={`${styles.newMessage__text}`}
				cols='71' rows='3'
				placeholder='Написать сообщение'
				value={props.newMessageText}
				onChange={e => props.updateMessage(e.target.value)} />
			<button className={`${styles.newMessage__button}`} onClick={() => props.addMessage()}>
				<span className={`${styles.dialogs__buttonText}`}>Отправить</span>
			</button>
		</section>
	)
}