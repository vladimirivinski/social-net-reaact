import React from 'react'
import {connect} from 'react-redux'
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader.js'
import {usersAPI} from '../../api/api'

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        // getUsers из папки api
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <div>
                    <Users
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                    />
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, {
    // Action Creators here from Reducer
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPIComponent)

export default UsersContainer

// переместил диспатчи в объект функции коннект и сократил написание

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
