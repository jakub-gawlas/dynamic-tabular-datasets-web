// @flow

export type Post = {
  id: number,
  username: string,
  title: string,
  views: number,
  likes: number,
  createdAt: string
};

export type NewPost = {
  username: string,
  title: string
};

export type SettingsResultTable = {
  postsPerPage: number,
  filter: Filter,
  sort: Sort
};

export type Filter = {
  username: string
};

export type Sort = {
  by: string,
  type: 'asc' | 'desc'
};