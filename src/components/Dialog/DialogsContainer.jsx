import Dialog from './Dialog'
import {connect} from 'react-redux'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer'

// данные из стейта
let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage,
    }
}
// колбэки отправляющиеся в презентационную компоненту
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogsContainer

//Старый код без библиотеки react-redux и connect

// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogData

//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }

//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }

//     return (
//         <Dialog
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogData={state}
//         />
//     )
// }
