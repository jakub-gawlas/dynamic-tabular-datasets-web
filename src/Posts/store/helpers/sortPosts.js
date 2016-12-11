// @flow
import type { Post, Sort } from '../../typedefs';

function sortPosts(posts: Post[], { by, type }: Sort){
  return [...posts].sort(_compareBy(by, type));
}

function _compareBy(key: string, type: 'asc' | 'desc'): (Post, Post) => number {
  return (a: Post, b: Post): number => {
    const typeValue = typeof a[key];
    
    // Swap passed params if sorted descending
    if(type === 'desc') [a, b] = [b, a];

    switch(typeValue) {
      case 'number': 
        return a[key] - b[key];

      case 'string':
        return a[key].localeCompare(b[key]);

      default: 
        return 0;
    }  
  };
}

export default sortPosts;