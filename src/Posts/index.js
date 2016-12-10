// @flow

import React, { Component} from 'react';
import { observer } from 'mobx-react';
import PostsStore from './store';

const newPost = {
  id: 4,
  username: 'Andrzej_III',
  title: 'Yo yo yo',
  views: 100,
  likes: 10,
  createdAt: '2015-01-20'
};

@observer
class Posts extends Component {
  render(){
    return(
      <div>
        <ul>
          {PostsStore.sortedPosts.map(({ title }) => <li>{title}</li>)}
        </ul>
        <button onClick={() => PostsStore.addPost(newPost)}>ADD</button>
      </div>
    );
  }
}

export default Posts;

