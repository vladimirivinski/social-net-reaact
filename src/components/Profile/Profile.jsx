import React from 'react';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};

export default Profile;
