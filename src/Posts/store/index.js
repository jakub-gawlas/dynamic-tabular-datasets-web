// @flow
import type { Post, NewPost } from '../typedefs';

import { observable, computed, action } from 'mobx';
import * as api from '../services/api';

class PostsStore {

  @observable
  posts: Post[] = []

  constructor(){
    this.posts = api.getPosts();
  }

  @computed
  get sortedPosts(): Post[]{
    return this.posts;
  }

  @action
  addPost = (post: NewPost) => {
    const newPost: Post = {
      ...post,
      id: 4,
      views: 0,
      likes: 0,
      createdAt: '2015-01-19'
    };
    this.posts.push(newPost);
  }

}

const postsStore = new PostsStore();

export default postsStore;