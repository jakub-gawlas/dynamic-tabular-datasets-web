// @flow
import type { Post, NewPost } from '../../typedefs';

/** Helpers */
import moment from 'moment';

/** Mocked data */
import { POSTS } from './data';

/**  
 * ID of last item from array `POSTS`,
 * will be increment if add new post
*/
let lastIndex = POSTS[POSTS.length-1].id;

/** 
 * Return all posts 
 */
export function getPosts(): Post[] {
  return POSTS;
}

/** 
 * Add new post, return created post
 */
export function addPost(newPost: NewPost): Post {
  return {
    ...newPost,
    id: ++lastIndex,
    views: 0,
    likes: 0,
    createdAt: moment().format()
  };
}