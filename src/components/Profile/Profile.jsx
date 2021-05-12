import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileIHeader';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileHeader />
      <MyPost post={props.profileData.post} newPostText={props.profileData.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Profile;
