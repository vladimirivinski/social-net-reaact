import React from 'react'
import s from './Dialog.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import MessageReduxForm from './Message/AddMessageForm'
import {Redirect} from 'react-router-dom'

const Dialogs = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />

    let state = props.dialogData

    // Mapping to the arrays
    let dialogElements = state.users.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let message = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />)

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialog_item}>
                    <div>{dialogElements}</div>
                </div>
            </div>
            <div>
                <div className={s.messages}>{message}</div>
                <div>
                    <MessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs
