// @flow
import type { Post, NewPost, SettingsResultTable } from '../typedefs';

import { observable, computed, action, asMap } from 'mobx';
import * as api from '../services/api';

class PostsStore {

  @observable
  posts: Post[] = []

  @observable
  currentPage: number = 1

  @observable
  settingsResultTable = asMap({
    postsPerPage: 5,
    filter: {
      username: ''
    },
    sort: {
      by: '',
      type: ''
    }
  })

  constructor(){
    this.posts = api.getPosts();
  }

  @computed
  get resultPosts(): Post[]{
    const postsPerPage = this.settingsResultTable.get('postsPerPage');
    const startIndex = (this.currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return this.posts.slice(startIndex, endIndex);
  }

  @computed
  get numberOfPages(): number {
    return Math.ceil(this.posts.length / this.settingsResultTable.get('postsPerPage'));
  }

  @action
  addPost = (post: NewPost) => {
    const newPost = api.addPost(post);
    this.posts = [...this.posts, newPost];
  }

  @action
  setCurrentPage = (page: number) => {
    this.currentPage = page;
  } 

}

const postsStore = new PostsStore();

export default postsStore;