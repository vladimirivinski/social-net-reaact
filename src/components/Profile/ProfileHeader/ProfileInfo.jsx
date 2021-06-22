import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import emptyPhoto from '../../../assets/images/empty.jpeg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div id='page'>
            <div className={s.header_page}>
                <img className={s.header_image} src='http://norfacsa.com/images/header1.png' alt='' />
            </div>
            <div className={s.container}>
                <div>
                    <img className={s.avatar} src={props.profile.photos.large !== null ? props.profile.photos.large : emptyPhoto} alt='' />
                </div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className={s.full_name}>{props.profile.fullName}</div>
                <div className={s.contacts}>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
                <div className={s.job}>
                    <span>{props.profile.lookingForAJob}</span>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
