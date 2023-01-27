import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalPagesCount, setTotalUsersCount, setUsers, unfollow, setIsFetching, setPagesGallery, setIsFollowingProgress } from '../../redux/usersReducer';
import { Users } from './Users';
import usersAPI from '../../api/samurai';


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.setIsFetching(true)
		let { currentPage: page, pageSize: count } = this.props
		usersAPI.getUsers(page, count).then(data => {
			let { totalCount, items } = data
			let pagesCount = Math.ceil(totalCount / count)
			this.props.setTotalUsersCount(totalCount)
			this.props.setTotalPagesCount(pagesCount)
			this.props.setPagesGallery(page)
			this.props.setUsers(items)
			this.props.setIsFetching(false)
		})
	}

	onPageChanged = page => {
		this.props.setIsFetching(true)
		this.props.setCurrentPage(page)
		this.props.setPagesGallery(page)
		let {
			totalPagesCount: pagesCount,
			pageSize: size,
			totalUsersCount: usersCount } = this.props
		usersAPI.getUsersOnChange({ page, size, pagesCount, usersCount })
			.then(data => this.props.setUsers(data.items))
		this.props.setIsFetching(false)
	}

	onUnfollowButtonClick = userID => {
		this.props.setIsFollowingProgress(true, userID)
		usersAPI.deleteIsFollowed(userID)
			.then(resultCode => {
				console.log(resultCode)
				if (resultCode === 0) {
					this.props.unfollow(userID)
				}
				this.props.setIsFollowingProgress(false, userID)
			})
	}

	onFollowButtonClick = userID => {
		this.props.setIsFollowingProgress(true, userID)
		usersAPI.postIsFollowed(userID)
			.then(resultCode => {
				if (resultCode === 0) {
					this.props.follow(userID)
				}
				this.props.setIsFollowingProgress(false, userID)
			})
	}


	render() {
		return (<Users
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			totalPagesCount={this.props.totalPagesCount}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			isFetching={this.props.isFetching}
			pagesGallery={this.props.pagesGallery}
			isFollowingProgress={this.props.isFollowingProgress}
			onFollowButtonClick={this.onFollowButtonClick}
			onUnfollowButtonClick={this.onUnfollowButtonClick} />
		)
	}
}

const mapStateToProps = state => (
	{
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		totalPagesCount: state.usersPage.totalPagesCount,
		pagesGallery: state.usersPage.pagesGallery,
		isFetching: state.usersPage.isFetching,
		isFollowingProgress: state.usersPage.isFollowingProgress
	}
)

export default connect(mapStateToProps,
	{
		follow,
		unfollow,
		setUsers,
		setTotalUsersCount,
		setCurrentPage,
		setTotalPagesCount,
		setIsFetching,
		setPagesGallery,
		setIsFollowingProgress
	}
)(UsersContainer)