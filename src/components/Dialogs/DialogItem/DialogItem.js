import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'
import { Avatar } from '../../jnt/Avatar/Avatar';


const DialogItem = (props) => {

	const activeDialog = ({ isActive }) => {
		return (
			isActive ? styles.dialogLink_active : styles.dialogLink
		)
	}

	let path = `/dialogs/${props.id}`


	return (
		<div className={styles.dialog}>
			<Avatar size='3' profilePhoto={`img/${props.source}`} />
			<NavLink to={path} className={activeDialog}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default DialogItem