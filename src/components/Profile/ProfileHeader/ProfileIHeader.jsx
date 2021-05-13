import React from 'react'
import s from './ProfileHeader.module.css'

const ProfileHeader = (props) => {
    return (
        <div className={s.header_page}>
            <img className={s.header_image} src='http://norfacsa.com/images/header1.png' alt='' />
        </div>
    )
}

export default ProfileHeader
