import React from 'react'
import Dialog from './Dialog'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogData

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialog
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogData={state}
        />
    )
}

export default DialogsContainer
