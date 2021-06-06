import React from 'react'
import MyPost from './MyPost'
import {addPostActionCreator, addUpdateNewPostActionCreator} from '../../../redux/profileReducer'

const MyPostContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = addUpdateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPost
            updateNewPostText={onPostChange}
            addPost={addPost}
            post={state.profileData.post}
            newPostText={state.profileData.updateNewPostText}
        />
    )
}

export default MyPostContainer
