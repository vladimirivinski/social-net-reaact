import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import s from './Profile.module.css'
import ProfileHeader from './ProfileHeader/ProfileIHeader'

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileHeader />
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Profile
