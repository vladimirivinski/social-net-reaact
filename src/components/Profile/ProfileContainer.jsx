import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUsersProfile} from '../../redux/profileReducer'
import {withRouter} from 'react-router'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.getUsersProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

//HOK
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent)
