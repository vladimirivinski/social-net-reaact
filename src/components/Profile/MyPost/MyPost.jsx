import React from 'react';
import s from './MyPost.module.css';

const MyPost = () => {
  return (
    <div>
      <div className={s.item}>Name</div>
      <div className={s.item}>Photo</div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
    </div>
  );
};

export default MyPost;
