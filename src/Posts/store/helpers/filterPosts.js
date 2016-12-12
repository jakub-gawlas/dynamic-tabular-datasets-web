// @flow
import type { Post, Filter } from '../../typedefs';

/** 
 * Filter posts by username 
 */
function filterPosts(posts: Post[], { username }: Filter): Post[] {
  return posts.filter((post) => _isMatchStrings(post.username, username));
}

/** 
 * Check if arg `second` is substring of arg `first`, case insesitive  
 */
function _isMatchStrings(first: string, second: string): boolean {
  return first.toLowerCase().includes(second.toLowerCase());
}

export default filterPosts;