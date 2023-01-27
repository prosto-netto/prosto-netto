import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers(
	{
		sidebar: sidebarReducer,
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		usersPage: usersReducer,
		auth: authReducer
	}
)

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))