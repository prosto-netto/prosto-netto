const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

const initialState = {
	dialogItems: [
		{ id: '1', name: 'Bubo4ka', source: 'bubo4ka.jpg' },
		{ id: '2', name: 'Paul Vandamovi44', source: 'paul.jpg' },
		{ id: '3', name: 'Federick', source: 'federic.jpg' },
		{ id: '4', name: 'Anri', source: 'anri.jpg' }
	],

	messageItems: [
		{ id: 1, text: 'Как дела?', author: 1 },
		{ id: 2, text: 'Поль, как всегда, бухой...', author: 0 },
		{ id: 3, text: 'Федерик стал очень душным. Достает Дашку', author: 0 },
		{ id: 4, text: 'Я теперь всегда буду сверху', author: 1 },
		{ id: 5, text: 'Ни хуя, будешь чисто на отсосе', author: 0 }
	],

	newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messageItems: [...state.messageItems,
				{
					id: state.messageItems.length + 1,
					text: state.newMessageText,
					author: 0
				}],
				newMessageText: ''
			}
		case UPDATE_MESSAGE:
			return ({ ...state, newMessageText: action.text })
		default:
			return state
	}

}

export const updateMessage = text => ({ type: UPDATE_MESSAGE, text })

export const addMessage = () => ({ type: ADD_MESSAGE })

export default dialogsReducer