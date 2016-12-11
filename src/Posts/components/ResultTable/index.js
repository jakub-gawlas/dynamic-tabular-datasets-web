// @flow
import type { Post } from '../../typedefs';
import type { Header, OnClickSort } from '../../../commons/components/Table';

import React from 'react';
import { Pagination } from 'react-bootstrap';
import Table from '../../../commons/components/Table';
import styles from './styles.css';

type Props = {
  posts: Post[],
  numberOfPages: number,
  currentPage: number,
  onSelectPage: (number) => void,
  onClickSort: OnClickSort
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
      {numberOfPages > 0 &&
        <div className={styles.pagination__container}>
          <span className={styles.pagination__title}>
            Page
          </span>
          <Pagination 
              bsSize="medium"
              items={numberOfPages}
              activePage={currentPage}
              onSelect={onSelectPage}
          />
        </div>
      }
    </div>
  );
}

export default ResultTable;