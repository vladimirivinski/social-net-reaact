import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  let postItem = props.post.map((p) => <Post name={p.name} id={p.id} likeCount={p.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div>
      <div>
        <textarea ref={newPostElement} cols='30' rows='1'></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{postItem}</div>
    </div>
  );
};

export default MyPost;
