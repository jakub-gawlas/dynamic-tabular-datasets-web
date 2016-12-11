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
}

export type SettingsResultTable = {
  postsPerPage: number,
  filter: {
    username: string
  },
  sort: {
    by: string,
    type: string
  }
}