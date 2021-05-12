import { rerenderEntireTree } from '../render';

let state = {
  dialogData: {
    users: [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Max' },
      { id: 3, name: 'Nick' },
      { id: 4, name: 'Mike' },
    ],

    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'WTF' },
      { id: 3, message: 'Why' },
      { id: 4, message: 'No' },
      { id: 5, message: 'Bye' },
    ],
  },

  profileData: {
    post: [
      { id: 1, name: 'First post', likeCount: 12 },
      { id: 2, name: 'Thecond post', likeCount: 2 },
      { id: 3, name: 'Third post', likeCount: 5 },
    ],
    newPostText: 'Enter your post',
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 4,
    name: state.profileData.newPostText,
    likeCount: 0,
  };
  state.profileData.post.push(newPost);
  state.profileData.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profileData.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
