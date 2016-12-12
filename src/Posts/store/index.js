// @flow
import type { Post, NewPost, Filter, Sort } from '../typedefs';

import { observable, computed, action, asMap, autorun } from 'mobx';
import * as api from '../services/api';
import * as persistence from '../services/persistence';
import { filterPosts, sortPosts } from './helpers';

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
      by: 'id',
      type: 'asc'
    }
  })

  constructor(){
    this.posts = api.getPosts();
    this.loadPersistencedData();
    this.enablePersistence();
  }

  @computed
  get filteredAndSortedPosts(): Post[] {
    const filteredPosts = filterPosts(this.posts, this.settingsResultTable.get('filter'));
    const sortedPosts = sortPosts(filteredPosts, this.settingsResultTable.get('sort'));

    return sortedPosts;
  }

  @computed
  get resultPosts(): Post[] {
    const postsPerPage = this.settingsResultTable.get('postsPerPage');
    const startIndex = (this.currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return this.filteredAndSortedPosts.slice(startIndex, endIndex);
  }

  @computed
  get numberOfPages(): number {
    return Math.ceil(this.filteredAndSortedPosts.length / this.settingsResultTable.get('postsPerPage'));
  }

  @action
  addPost = (post: NewPost) => {
    const newPost = api.addPost(post);
    this.posts = [...this.posts, newPost];
  }

  @action
  setPostsPerPage = (value: number) => {
    this.currentPage = 1;
    this.settingsResultTable.set('postsPerPage', value);
  }

  @action
  setCurrentPage = (page: number) => {
    this.currentPage = page;
  }

  @action
  setResultTableFilter = (filter: Filter) => {
    this.settingsResultTable.set('filter', filter);
  }

  @action
  setResultTableSort = ( sort: Sort) => {
    this.settingsResultTable.set('sort', sort);
  }

  @action
  loadPersistencedData = () => {
    const postsPerPage = persistence.getPostsPerPage();
    postsPerPage && this.setPostsPerPage(postsPerPage);

    const sort = persistence.getSort();
    sort && this.setResultTableSort(sort);
  }

  enablePersistence = () => {
    const observers = [
      () => persistence.savePostsPerPage(this.settingsResultTable.get('postsPerPage')),
      () => persistence.saveSort(this.settingsResultTable.get('sort'))
    ];
    observers.forEach((observer) => autorun(observer));
  }

}

const postsStore = new PostsStore();

export default postsStore;