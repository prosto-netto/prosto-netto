import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import { Messages } from './Messages/Messages';
import { NewMessageContainer } from './NewMessage/NewMessageContainer';

export const Dialogs = (props) => {

	let dialogItems = props.dialogItems
		.map(dialog => {
			return (
				<DialogItem
					id={dialog.id}
					name={dialog.name}
					source={`avatars\\${dialog.source}`}
					key={dialog.id} />
			)
		})

	return (
		<div className={`${styles.dialogs}`}>
			<div className={`${styles.dialogs__dialogTitle} ${styles.dialogs__title}`}>Диалоги</div>
			<div className={`${styles.dialogs__messageTitle} ${styles.dialogs__title}`}>Сообщения</div>
			<section className={`${styles.dialogs__dialogItems}`}>
				{dialogItems}
			</section>
			<Messages messageItems={props.messageItems} />
			<NewMessageContainer />
		</div>
	)
}