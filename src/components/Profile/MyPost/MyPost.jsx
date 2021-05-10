import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
  let post = [
    { id: 1, name: 'First post', likeCount: 12 },
    { id: 2, name: 'Thecond post', likeCount: 2 },
    { id: 3, name: 'Third post', likeCount: 5 },
  ];

  let postItem = post.map((p) => <Post name={p.name} id={p.id} likeCount={p.likeCount} />);

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
