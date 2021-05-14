const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// add TEST initial state
let initialState = {
    post: [
        {id: 1, name: 'First post', likeCount: 12},
        {id: 2, name: 'Thecond post', likeCount: 2},
        {id: 3, name: 'Third post', likeCount: 5},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: state.newPostText,
                likeCount: 0,
            }
            state.post.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
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

export default profileReducer
