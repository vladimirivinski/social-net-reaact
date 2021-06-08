import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer'

// combine all created reducers
let reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers)

export default store
