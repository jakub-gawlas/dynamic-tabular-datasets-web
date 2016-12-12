// @flow
import type { Post, NewPost } from '../../typedefs';

/** Helpers */
import moment from 'moment';

/** Mocked data */
import { POSTS } from './data';

let lastIndex = POSTS[POSTS.length-1].id;

export function getPosts(): Post[] {
  return POSTS;
}

export function addPost(newPost: NewPost): Post {
  return {
    ...newPost,
    id: ++lastIndex,
    views: 0,
    likes: 0,
    createdAt: moment().format()
  };
}