import React from 'react';

const Post = (props) => {
  return (
    <div>
      <div id={props.id}> {props.name} </div>
      <span>{'Like: ' + props.likeCount}</span>
    </div>
  );
};

export default Post;
