// @flow
import type { Post, Filter } from '../../typedefs';

function filterPosts(posts: Post[], { username }: Filter): Post[] {
  return posts.filter((post) => _isMatchStrings(post.username, username));
}

function _isMatchStrings(first: string, second: string): boolean {
  return first.toLowerCase().includes(second.toLowerCase());
}

export default filterPosts;