// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

// add TEST initial state
let initialState = {
    users: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Nick'},
        {id: 4, name: 'Mike'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'WTF'},
        {id: 3, message: 'Why'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            }

        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
}

export default dialogsReducer
