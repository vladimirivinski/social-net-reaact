import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileIHeader';

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileHeader />
      <MyPost />
    </div>
  );
};

export default Profile;
