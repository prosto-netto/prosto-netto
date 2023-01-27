import React from 'react';
import { connect } from 'react-redux';
import usersAPI from '../../api/samurai';
import { setAuthData } from '../../redux/authReducer';
import { Header } from './Header';


class HeaderContainer extends React.Component {

	componentDidMount() {
		usersAPI.getAuthMe().then(({ resultCode, data }) => (
			!resultCode && this.props.setAuthData(data))
		)
	}

	render() {
		return (
			<Header isAuth={this.props.isAuth} login={this.props.login} />
		)
	}
}


let mapStateToProps = state => (
	{
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
)

export default connect(mapStateToProps, { setAuthData })(HeaderContainer)