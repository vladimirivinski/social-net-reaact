const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

// add TEST initial state
let initialState = {
    users: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Nick'},
        {id: 4, name: 'Mike'},
        {id: 5, name: 'Like'},
        {id: 6, name: 'Rike'},
        {id: 7, name: 'Sike'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'WTF'},
        {id: 3, message: 'Why'},
        {id: 4, message: 'No'},
        {id: 5, message: 'Bye'},
    ],

    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }

        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default dialogsReducer
