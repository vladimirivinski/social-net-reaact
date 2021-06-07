import React from 'react'
import Post from './Post/Post'
import s from './MyPost.module.css'

const MyPost = (props) => {
    let postItem = props.post.map((p) => (
        <Post name={p.name} key={p.id} id={p.id} likeCount={p.likeCount} />
    ))

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
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
            <div className={s.post_item}>{postItem}</div>
        </div>
    )
}

export default MyPost
