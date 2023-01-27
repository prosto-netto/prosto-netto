import React from 'react';
import styles from './Users.module.css'
import { Avatar } from '../jnt/Avatar/Avatar';
import { FollowButton } from './FollowButton/FollowButton';
import { PagesGallery } from './PagesGallery/PagesGallery';
import { UserInfo } from './UserInfo/UserInfo';
import { Preloader } from '../jnt/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import photoPatch from '../../assets/img/small.jpg'

export const Users = props => {
	return (
		<>
			{props.isFetching ? <Preloader /> : null}
			{
				props.users.map(user => {
					return (
						<div className={`${styles.wrapper}`} key={user.id}>
							<div className={`${styles.interactiveBlock}`}>
								<NavLink to={`/profile/${user.id}`} className={`${styles.profileLink}`}>
									<Avatar profilePhoto={user.photos.small ? user.photos.small : photoPatch} size='4' />
								</NavLink>
								<FollowButton
									isFollowed={user.followed}
									userID={user.id}
									follow={props.follow}
									unfollow={props.unfollow}
									isFollowingProgress={props.isFollowingProgress}
									onFollowButtonClick={props.onFollowButtonClick}
									onUnfollowButtonClick={props.onUnfollowButtonClick} />
							</div>
							<UserInfo
								name={user.name}
								status={user.status
									? user.status
									: 'I am very cool JS developer!!!'} />
						</div >
					)
				})
			}
			<PagesGallery pagesGallery={props.pagesGallery} currentPage={props.currentPage}
				onPageChanged={props.onPageChanged} totalPagesCount={props.totalPagesCount} />
		</>
	)
}