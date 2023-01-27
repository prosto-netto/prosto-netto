const initialState = {
	friendsLinks: [
		{ id: '1', name: 'Bubo4ka', source: 'bubo4ka.jpg', path: '/bubo4ka' },
		{ id: '2', name: 'Paul Vandamovi44', source: 'paul.jpg', path: '/paul_vandamovi44' },
		{ id: '3', name: 'Federick', source: 'federic.jpg', path: 'federic' }
	]
}

const friendsGalleryReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default friendsGalleryReducer