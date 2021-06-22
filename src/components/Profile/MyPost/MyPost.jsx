import React from 'react'
import Post from './Post/Post'
import s from './MyPost.module.css'
import PostReduxForm from './Post/AddPostForm'

const MyPost = (props) => {
    let postItem = props.post.map((p) => <Post name={p.name} key={p.id} id={p.id} likeCount={p.likeCount} />)

    const onSubmit = (formData) => {
        props.addPostActionCreator(formData.addNewPost)
    }
    return (
        <div>
            <div>
                <PostReduxForm onSubmit={onSubmit} />
            </div>
            <div className={s.post_item}>{postItem}</div>
        </div>
    )
}

export default MyPost
