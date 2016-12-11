// @flow
import type { Post, Sort } from '../../typedefs';
import type { Header, OnClickSort } from '../../../commons/components/Table';

import React from 'react';
import Table from '../../../commons/components/Table';
import Pager from './Pager';

type Props = {
  posts: Post[],
  numberOfPages: number,
  currentPage: number,
  onSelectPage: (number) => void,
  onClickSort: OnClickSort,
  itemsPerPage: number,
  onSelectItemsPerPage: (value: number) => void
};

const TABLE_HEADERS: Header[] = [
  {
    name: 'id',
    label: 'ID'
  },
  {
    name: 'username',
    label: 'Author'
  },
  {
    name: 'title',
    label: 'Post title'
  },
  {
    name: 'views',
    label: 'Views'
  },
  {
    name: 'likes',
    label: 'Likes'
  },
  {
    name: 'createdAt',
    label: 'Created at'
  }
];

function ResultTable({ posts, numberOfPages, currentPage, onSelectPage, onClickSort, itemsPerPage, onSelectItemsPerPage }: Props){
  return (
    <div>
      <Table 
        headers={TABLE_HEADERS}
        rows={posts}
        onClickSort={onClickSort}
      />
      <Pager 
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        onSelectPage={onSelectPage}
        itemsPerPage={itemsPerPage}
        onSelectItemsPerPage={onSelectItemsPerPage}
      />
    </div>
  );
}

export default ResultTable;