// @flow
import type { Post } from '../../typedefs';

import React from 'react';
import { Table, Pagination } from 'react-bootstrap';

type Props = {
  posts: Post[],
  numberOfPages: number,
  currentPage: number,
  onSelectPage: (number) => void
}

function ResultTable({ posts, numberOfPages, currentPage, onSelectPage }: Props){
  return (
    <div>
      <Table striped bordered condensed>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Post title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(({ id, username, title }) => (
            <tr>
              <td>{id}</td>
              <td>{username}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
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