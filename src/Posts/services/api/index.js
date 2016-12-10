// @flow
import type { Post } from '../../typedefs';

import { POSTS } from './data';

export function getPosts(): Post[] {
  return POSTS;
}