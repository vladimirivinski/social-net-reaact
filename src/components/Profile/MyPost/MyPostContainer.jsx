import {connect} from 'react-redux'
import MyPost from './MyPost'
import {addPostActionCreator} from '../../../redux/profileReducer'

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (addNewPost) => {
//             dispatch(addPostActionCreator(addNewPost))
//         },
//         // updateNewPostText: (text) => {
//         //     let action = addUpdateNewPostActionCreator(text)
//         //     dispatch(action)
//         // },
//     }
// }

const MyPostContainer = connect(mapStateToProps, {addPostActionCreator})(MyPost)

export default MyPostContainer

// const MyPostContainer = (props) => {
//     let state = props.store.getState()

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let onPostChange = (text) => {
//         let action = addUpdateNewPostActionCreator(text)
//         props.store.dispatch(action)
//     }

//     return (
//         <MyPost
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             post={state.profilePage.post}
//             newPostText={state.profilePage.updateNewPostText}
//         />
//     )
// }
