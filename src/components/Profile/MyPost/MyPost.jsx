import React from 'react';

import Post from './Post/Post';

const MyPost = (props) => {
  let postItem = props.post.map((p) => <Post name={p.name} id={p.id} likeCount={p.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols='30' rows='1' />
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{postItem}</div>
    </div>
  );
};

export default MyPost;
