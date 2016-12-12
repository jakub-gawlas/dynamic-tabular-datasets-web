// @flow
import type { Sort } from '../../typedefs';

/** Consts */
const KEY_POSTS_PER_PAGE = 'postsPerPage';
const KEY_SORT = 'sort';

/** 
 * Save postsPerPage to local storage
 */
export function savePostsPerPage(value: number){
  localStorage.setItem(KEY_POSTS_PER_PAGE, value.toString());
}

/**
 * Return postsPerPage from local storage
 */
export function getPostsPerPage(): number | null {
  const postsPerPage = localStorage.getItem(KEY_POSTS_PER_PAGE);
  return postsPerPage ? parseInt(postsPerPage, 10) : null;
}

/**
 * Save sort to local storage
 */
export function saveSort(value: Sort){
  localStorage.setItem(KEY_SORT, JSON.stringify(value));
}

/**
 * Return sort from local storage
 */
export function getSort(): Sort | null {
  const sort = localStorage.getItem(KEY_SORT);
  return sort ? JSON.parse(sort) : null;
}