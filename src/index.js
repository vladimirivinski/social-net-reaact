import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
