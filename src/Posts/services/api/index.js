// @flow
import type { Post, NewPost } from '../../typedefs';

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
    createdAt: '2016-01-01'
  };
}