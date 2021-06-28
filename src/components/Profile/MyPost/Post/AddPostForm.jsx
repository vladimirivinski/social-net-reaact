import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required, maxLength30, minLength1} from '../../../../utils/validators/validators'

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'addNewPost'} placeholder='Add new post' validate={[required, maxLength30, minLength1]} />
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
