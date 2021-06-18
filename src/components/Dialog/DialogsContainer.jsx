import Dialog from './Dialog'
import {connect} from 'react-redux'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

// данные из стейта
let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage,
    }
}

//HOC ----- withAuthRedirect ---- relocate to compose
// Dialog ---- to compose ()(Dialog)
// let AuthRedirectComponent = withAuthRedirect(Dialog)

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
// connect(mapStateToProps, mapDispatchToProps) ----- relocat to compose
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)

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
