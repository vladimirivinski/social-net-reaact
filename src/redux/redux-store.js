import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import newsReducer from './newsReducer'
import thunkMiddleware from 'redux-thunk'

// combine all created reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage: newsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
