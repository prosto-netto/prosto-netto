const initialState = {
	asideLinks: [
		{ id: 1, path: '/profile', name: 'Профиль' },
		{ id: 2, path: '/dialogs', name: 'Сообщения' },
		{ id: 5, path: '/users', name: 'Пользователи' },
		{ id: 3, path: '/music', name: 'Музыка' },
		{ id: 4, path: '/news', name: 'Новости' },
		{ id: 7, path: '/settings', name: 'Настройки' }
	]
}

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default sidebarReducer