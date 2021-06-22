import React from 'react'
import {Field, reduxForm} from 'redux-form'

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'addNewPost'} placeholder='Add new post' type='text' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    //uniq name for the form
    form: 'profile-add-post',
})(AddPostForm)

export default PostReduxForm
