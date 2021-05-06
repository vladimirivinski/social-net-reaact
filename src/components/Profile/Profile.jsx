import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <img className={s.header_img} src='https://image.shutterstock.com/image-illustration/website-header-banner-design-abstract-260nw-1621024345.jpg' />

      <MyPost />
    </div>
  );
};

export default Profile;
