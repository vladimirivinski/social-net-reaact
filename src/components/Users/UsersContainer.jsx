import React from 'react'
import {connect} from 'react-redux'
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader.js'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        // API
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        //API
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                        followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    //HOK
    withAuthRedirect,
    // function connect
    connect(mapStateToProps, {
        // Action Creators here from Reducer
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        // thunks
        getUsers,
    })
)(UsersAPIComponent)

//HOC
// let AuthRedirectComponent = withAuthRedirect(UsersAPIComponent)

// const UsersContainer = connect(mapStateToProps, {
//     // Action Creators here from Reducer
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
// })(AuthRedirectComponent)
