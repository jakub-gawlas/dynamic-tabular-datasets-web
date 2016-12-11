// @flow
import type { Sort } from '../../typedefs';

const KEY_POSTS_PER_PAGE = 'postsPerPage';
const KEY_SORT = 'sort';

export function savePostsPerPage(value: number){
  localStorage.setItem(KEY_POSTS_PER_PAGE, value.toString());
}

export function getPostsPerPage(): number | null {
  const postsPerPage = localStorage.getItem(KEY_POSTS_PER_PAGE);
  return postsPerPage ? parseInt(postsPerPage) : null;
}

export function saveSort(value: Sort){
  localStorage.setItem(KEY_SORT, JSON.stringify(value));
}

export function getSort(): Sort | null {
  const sort = localStorage.getItem(KEY_SORT);
  return sort ? JSON.parse(sort) : null;
}