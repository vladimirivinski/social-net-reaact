const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
    },

    _callSubscriber() {},

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id: 4,
            name: this._state.profileData.newPostText,
            likeCount: 0,
        }
        this._state.profileData.post.push(newPost)
        this._state.profileData.newPostText = ''
        this._callSubscriber(this._state)
    },

    _updateNewPostText(newText) {
        this._state.profileData.newPostText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogData.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogData.newMessageBody
            this._state.dialogData.newMessageBody = ''
            this._state.dialogData.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const addUpdateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

window.store = store

export default store
