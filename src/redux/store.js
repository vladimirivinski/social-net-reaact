import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sideBarReducer from './sideBarReducer'

let store = {
    _state: {
        dialogData: {
            users: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Nick'},
                {id: 4, name: 'Mike'},
                {id: 5, name: 'Like'},
                {id: 6, name: 'Rike'},
                {id: 7, name: 'Sike'},
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'WTF'},
                {id: 3, message: 'Why'},
                {id: 4, message: 'No'},
                {id: 5, message: 'Bye'},
            ],

            newMessageBody: '',
        },

        profileData: {
            post: [
                {id: 1, name: 'First post', likeCount: 12},
                {id: 2, name: 'Thecond post', likeCount: 2},
                {id: 3, name: 'Third post', likeCount: 5},
            ],
            newPostText: '',
        },
        sideBar: {},
    },

    _callSubscriber() {},

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    // dispatch action(object) from UI
    dispatch(action) {
        // Add reducer
        this._state.profileData = profileReducer(this._state.profileData, action)
        this._state.dialogData = dialogsReducer(this._state.dialogData, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    },
}

window.store = store

export default store
