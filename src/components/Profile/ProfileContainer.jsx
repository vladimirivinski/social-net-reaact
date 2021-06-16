import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profileReducer'
import {withRouter} from 'react-router'
import {usersAPI} from '../../api/api'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        usersAPI.getUserById(userId).then((responce) => {
            this.props.setUserProfile(responce)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
