import React from 'react'
import s from './Dialog.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer'

const Dialogs = (props) => {
    let state = props.store.getState().dialogData

    // Mapping to the arrays
    let dialogElements = state.users.map((d) => <DialogItem name={d.name} id={d.id} />)
    let message = state.messages.map((m) => <Message message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                    <textarea
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
