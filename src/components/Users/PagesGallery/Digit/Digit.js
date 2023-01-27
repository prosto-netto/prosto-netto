import React from 'react';
import styles from './Digit.module.css';

export const Digit = (props) => {
	switch (props.value) {
		case props.currentPage:
			return <span className={styles.currentPage}>{props.value}</span>
		default:
			return (
				<span
					className={styles.otherPages}
					onClick={() => props.onPageChanged(props.value)}>{props.value}</span>
			)
	}
}