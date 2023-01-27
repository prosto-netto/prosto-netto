import React from 'react'
import { connect } from 'react-redux'
import { setIsFetching, setUserProfile } from '../../redux/profileReducer'
import { Profile } from './Profile'
import { useParams } from 'react-router-dom'

class ProfileContainer extends React.Component {

	componentDidMount() {
		let { setUserProfile, users, userID } = this.props
		userID && setUserProfile(users.filter(user => user.id === Number(userID))[0])
	}

	render() {
		let { userID } = this.props
		let { userProfile, profile } = this.props.profilePage
		return (<Profile profile={userProfile && userID ? userProfile : profile} />)
	}
}



const TakeParams = props => {
	let { userID } = useParams()
	return (<ProfileContainer {...props} userID={userID} />)
}

const mapStateToProps = state => (
	{
		profilePage: state.profilePage,
		users: state.usersPage.users
	}
)

export default connect(mapStateToProps, { setIsFetching, setUserProfile })(TakeParams)