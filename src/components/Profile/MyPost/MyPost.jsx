import React from 'react'
import Post from './Post/Post'
import {addPostActionCreator, addUpdateNewPostActionCreator} from './../../../redux/profileReducer'

const MyPost = (props) => {
    let postItem = props.post.map((p) => <Post name={p.name} id={p.id} likeCount={p.likeCount} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(addUpdateNewPostActionCreator(text))
    }

    return (
        <div>
            <div>
                <textarea
                    ref={newPostElement}
                    placeholder={'New post'}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            <div>{postItem}</div>
        </div>
    )
}

export default MyPost
