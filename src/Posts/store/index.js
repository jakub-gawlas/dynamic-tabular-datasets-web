// @flow
import type { Post } from '../typedefs';

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
  addPost(post: Post){
    this.posts.push(post);
  }

}

const postsStore = new PostsStore();

export default postsStore;