import React from 'react'
import {Field, reduxForm} from 'redux-form'

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder='Message' type='text' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    //uniq name for the form
    form: 'dialogAddMessageForm',
})(AddMessageForm)

export default MessageReduxForm
