let store = {
  _state: {
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  addPost() {
    let newPost = {
      id: 4,
      name: this._state.profileData.newPostText,
      likeCount: 0,
    };
    this._state.profileData.post.push(newPost);
    this._state.profileData.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profileData.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
