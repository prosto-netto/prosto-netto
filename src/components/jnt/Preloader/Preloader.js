import React from 'react';
import styles from './Preloader.module.css';

export const Preloader = props => {
	let divs = []
	for (let i = 0; i < 12; i++) divs.push(i)
	return (
		<div className={styles.preloader__wrapper} >
			<div className={styles.preloader__spinner}>
				{divs.map(div => { return (<div key={div} />) })}
			</div>
		</div>
	)
}