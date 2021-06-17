import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {getAuthUsersData} from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //         withCredentials: true,
        //     })
        // thunk
        this.props.getAuthUsersData()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer)
