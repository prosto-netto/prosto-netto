import axios from "axios"

const instance = axios.create(
	{
		withCredentials: true,
		baseURL: `https://social-network.samuraijs.com/api/1.0/`
	}
)

const usersAPI = {
	getUsers(page, count) {
		return (
			instance.get(`users?count=${count}&page=${page}`)
				.then(response => response.data)
		)
	},
	getUsersOnChange(usersPage) {
		let { page, size, pagesCount, usersCount } = usersPage
		let isLastPage = (page === pagesCount)
		let restUsers = (usersCount % size)
		let lastPageSize = (restUsers ? restUsers : size)
		let count = (isLastPage ? lastPageSize : size)
		return (
			instance.get(`users?count=${count}&page=${page}`)
				.then(response => response.data)
		)
	},
	deleteIsFollowed(userID) {
		return (
			instance.delete(`follow/${userID}`)
				.then(response => {
					console.log(response)
					return response.data.resultCode
				}
				)
		)
	},
	postIsFollowed(userID) {
		return (
			instance.post(`follow/${userID}`)
				.then(response => {
					console.log(response)
					return response.data.resultCode
				}
				)
		)
	},
	getAuthMe() {
		return (
			instance.get(`auth/me`)
				.then(response => {
					let { resultCode, data } = response.data
					return { resultCode, data }
				})
		)
	}
}

export default usersAPI