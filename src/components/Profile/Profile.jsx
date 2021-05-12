import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileIHeader';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileHeader />
      <MyPost post={props.state.post} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
