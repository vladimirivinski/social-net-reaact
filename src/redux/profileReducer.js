const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

// add TEST initial state
let initialState = {
    post: [
        {id: 1, name: 'First post', likeCount: 12},
        {id: 2, name: 'Thecond post', likeCount: 2},
        {id: 3, name: 'Third post', likeCount: 5},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                name: state.newPostText,
                likeCount: 0,
            }
            return {...state, post: [...state.post, newPost], newPostText: ''}
        }

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const addUpdateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer
