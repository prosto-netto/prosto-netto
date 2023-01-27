import { connect } from 'react-redux'
import { addPost, updatePost } from '../../../../redux/profileReducer'
import { NewPost } from './NewPost'

const mapStateToProps = state => (
	{
		newPostText: state.profilePage.profile.posts.newPostText
	}
)

export const NewPostContainer = connect(mapStateToProps, { addPost, updatePost })(NewPost)