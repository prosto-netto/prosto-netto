import picture from '../assets/img/profile_photo.jpg'
import patch from '../assets/img/large.jpg'

const UPDATE_POST = 'UPDATE_POST'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


const myDateFormat = date => {
	const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	let dob = new Date(date)

	return (`${dob.getDate()} ${monthNames[dob.getMonth()]} ${dob.getFullYear()}`)
}


const initialState = {
	profile: {
		info: {
			name: 'Василий Коломиец',
			dob: '16 апреля 1986',
			location: {
				city: 'Lida',
				country: 'Belarus'
			},
			status: 'I very want to get an IT job',
			picture: picture
		},
		posts: {
			postItems: [
				{ id: 1, post: 'I like my job!', likesCount: '10' },
				{ id: 2, post: 'Don\'t cry on Paul Vandamovich', likesCount: '100' },
				{ id: 3, post: 'Never teach Kostochka', likesCount: '1K' },
				{ id: 4, post: 'Don\'t apply anybody to supress emotions', likesCount: '1M' },
			],

			newPostText: ''
		}
	},
	userProfile: null,
	isFetching: false,
	seed: 'prosto-netto'
}


const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				profile: {
					...state.profile,
					posts: {
						...state.profile.posts,
						postItems: [...state.profile.posts.postItems, {
							id: state.profile.posts.postItems.length + 1,
							post: state.profile.posts.newPostText,
							likesCount: Math.floor(Math.random() * 100)
						}],
						newPostText: ''
					}
				}
			}

		case UPDATE_POST:
			return {
				...state,
				profile: {
					...state.profile,
					posts: {
						...state.profile.posts,
						newPostText: action.text
					}
				}
			}

		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: {
					info: {
						name: action.profile.name,
						dob: myDateFormat(new Date()),
						location: {
							city: 'Minsk',
							country: 'Belarus'
						},
						status: action.profile.status ? action.profile.status : 'I\'m a lazy pig',
						picture: action.profile.photos.large ? action.profile.photos.large : patch,
					}
				}
			}

		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		default:
			return state
	}
}

export const updatePost = text => ({ type: UPDATE_POST, text })

export const addPost = () => ({ type: ADD_POST })

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })


export default profileReducer