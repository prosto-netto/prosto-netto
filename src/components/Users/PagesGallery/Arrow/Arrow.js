import React from 'react';
import styles from './Arrow.module.css';


export const Arrow = props => {

	switch (props.currentPage) {
		case 1:
		case props.totalPagesCount:
			return <span className={styles.arrowDisabled}>{props.caption}</span>
		default:
			return (
				<span
					className={styles.arrowEnabled}
					title={`К странице ${props.currentPage + props.direction}`}
					onClick={() => props.onPageChanged(props.currentPage + props.direction)}>{props.caption}</span>
			)
	}
}