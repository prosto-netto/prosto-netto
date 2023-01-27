import React from 'react';
import { Arrow } from './Arrow/Arrow';
import { Digit } from './Digit/Digit';
import { Basket } from './Basket/Basket'
import styles from './PagesGallery.module.css';

export const PagesGallery = (props) => {
	return (
		<div className={`${styles.pagesGallery}`}>
			{
				props.pagesGallery.map((value, index) => {
					switch (value) {
						case -1:
							return (
								<Basket key={index} />
							)
						case 0:
							return (
								<Arrow
									caption={String.fromCodePoint(index ? 0x2192 : 0x2190)}
									direction={index ? 1 : -1}
									onPageChanged={props.onPageChanged}
									currentPage={props.currentPage}
									totalPagesCount={props.totalPagesCount}
									key={index} />
							)
						default:
							return (
								<Digit
									value={value}
									onPageChanged={props.onPageChanged}
									currentPage={props.currentPage}
									totalPagesCount={props.totalPagesCount}
									key={index} />
							)
					}
				})
			}
		</div>
	)
}