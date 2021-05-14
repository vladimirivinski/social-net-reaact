import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideBarReducer from './sideBarReducer'

// combine all created reducers
let reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogsReducer,
    sideBar: sideBarReducer,
})

let store = createStore(reducers)

export default store
