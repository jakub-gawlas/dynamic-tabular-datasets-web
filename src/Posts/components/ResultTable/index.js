// @flow
import type { Post, Sort } from '../../typedefs';
import type { Header, OnClickSort } from '../../../commons/components/Table';

import React from 'react';
import Table from '../../../commons/components/Table';
import { Pagination } from 'react-bootstrap';

const tableHeaders: Header[] = [
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

type Props = {
  posts: Post[],
  numberOfPages: number,
  currentPage: number,
  onSelectPage: (number) => void,
  onClickSort: OnClickSort
};

function ResultTable({ posts, numberOfPages, currentPage, onSelectPage, onClickSort }: Props){
  return (
    <div>
      <Table 
        headers={tableHeaders}
        rows={posts}
        onClickSort={onClickSort}
      />
      <Pagination 
        bsSize="medium"
        items={numberOfPages}
        activePage={currentPage}
        onSelect={onSelectPage}
      />
    </div>
  );
}

export default ResultTable;