// @flow

import React, { Component} from 'react';
import { observer } from 'mobx-react';
import PostsStore from './store';
import NewPostForm from './components/NewPostForm';

@observer
class Posts extends Component {
  render(){
    return(
      <div>
        <ul>
          {PostsStore.sortedPosts.map(({ title }, idx) => <li key={idx}>{title}</li>)}
        </ul>
        <NewPostForm onSubmit={PostsStore.addPost} />
      </div>
    );
  }
}

export default Posts;

