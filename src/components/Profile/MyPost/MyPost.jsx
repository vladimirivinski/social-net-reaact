import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  let postItem = props.state.post.map((p) => <Post name={p.name} id={p.id} likeCount={p.likeCount} />);

  return (
    <div>
      <div>
        <input type='text' />
        <button>Add post</button>
      </div>
      <div>{postItem}</div>
    </div>
  );
};

export default MyPost;
