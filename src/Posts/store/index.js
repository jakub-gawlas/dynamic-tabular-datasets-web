// @flow
import type { Post, NewPost, Filter, Sort } from '../typedefs';

import { 
  observable, 
  computed, 
  action, 
  asMap,
  autorun 
} from 'mobx';

import { filterPosts, sortPosts } from './helpers';
import * as api from '../services/api';
import * as persistence from '../services/persistence';

/**
 * Store posts and properties used to manage dataset of posts
 */
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

  /**
   * Posts
   */

  /** Posts after filter and sort */
  @computed
  get filteredAndSortedPosts(): Post[] {
    const filteredPosts = filterPosts(this.posts, this.settingsResultTable.get('filter'));
    const sortedPosts = sortPosts(filteredPosts, this.settingsResultTable.get('sort'));

    return sortedPosts;
  }

  /** Posts after filter, sort and slice to proper subarray */
  @computed
  get resultPosts(): Post[] {
    const postsPerPage = this.settingsResultTable.get('postsPerPage');
    const startIndex = (this.currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return this.filteredAndSortedPosts.slice(startIndex, endIndex);
  }

  /** Number subarray of sliced posts   */
  @computed
  get numberOfPages(): number {
    return Math.ceil(this.filteredAndSortedPosts.length / this.settingsResultTable.get('postsPerPage'));
  }

  /** Add new post to store */
  @action
  addPost = (post: NewPost) => {
    const newPost = api.addPost(post);
    this.posts = [...this.posts, newPost];
  }

  /**
   * Current page
   */

  @action
  setCurrentPage = (page: number) => {
    this.currentPage = page;
  }

  /**
   * Settings result table
   */

  @action
  setPostsPerPage = (value: number) => {
    this.currentPage = 1;
    this.settingsResultTable.set('postsPerPage', value);
  }

  @action
  setResultTableFilter = (filter: Filter) => {
    this.settingsResultTable.set('filter', filter);
  }

  @action
  setResultTableSort = ( sort: Sort) => {
    this.settingsResultTable.set('sort', sort);
  }

  /**
   * Persistence data
   */

  /** Load data saved on local storage */
  @action
  loadPersistencedData = () => {
    const postsPerPage = persistence.getPostsPerPage();
    postsPerPage && this.setPostsPerPage(postsPerPage);

    const sort = persistence.getSort();
    sort && this.setResultTableSort(sort);
  }

  /** Automatically save data on local storage */
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