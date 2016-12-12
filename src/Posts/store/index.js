// @flow
import type { Post, NewPost, Filter, Sort } from '../typedefs';

import { 
  observable, 
  computed, 
  action, 
  asMap,
  autorun 
} from 'mobx';

/** Helpers */
import moment from 'moment';
import { filterPosts, sortPosts } from './helpers';
import * as api from '../services/api';
import * as persistence from '../services/persistence';

/**
 * Store posts and properties used to manage dataset of posts
 */
class PostsStore {

  /** All posts */
  @observable
  posts: Post[] = []

  /** Current number of displayed page of posts */
  @observable
  currentPage: number = 1

  /** Properties dataset of posts */
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
  get slicedPosts(): Post[] {
    const postsPerPage = this.settingsResultTable.get('postsPerPage');
    const startIndex = (this.currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return this.filteredAndSortedPosts.slice(startIndex, endIndex);
  }

  /** Posts after filter, sort, sliced and format (createdAt to format `YYYY-MM-DD`) */
  @computed 
  get resultPosts(): Post[] {
    return this.slicedPosts.map((post) => ({
      ...post,
      createdAt: moment(post.createdAt).format('YYYY-MM-DD')
    }));
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

  @computed
  get sort(): Sort {
    return this.settingsResultTable.get('sort');
  }

  get filter(): Filter {
    return this.settingsResultTable.get('filter');
  }

  get postsPerPage(): number {
    return this.settingsResultTable.get('postsPerPage');
  }

  @action
  setPostsPerPage = (value: number) => {
    this.currentPage = 1;
    this.settingsResultTable.set('postsPerPage', value);
  }

  @action
  setFilter = (filter: Filter) => {
    this.settingsResultTable.set('filter', filter);
  }

  @action
  setSort = ( sort: Sort) => {
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
    sort && this.setSort(sort);
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