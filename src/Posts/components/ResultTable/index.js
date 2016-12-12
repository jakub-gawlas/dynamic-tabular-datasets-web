// @flow
import type { Header } from '../../../commons/components/Table';

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PostsStore from '../../store';
import Table from '../../../commons/components/Table';
import Pager from './Pager';

type Props = {
  className?: string
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

@observer
class ResultTable extends Component {
  props: Props

  render(){
    const { className } = this.props;
    const {
      resultPosts,
      numberOfPages,
      currentPage,
      setCurrentPage,
      setResultTableSort
    } = PostsStore;

    return (
      <div className={className}>
        <Table 
          headers={TABLE_HEADERS}
          rows={resultPosts}
          onClickSort={(by, type) => setResultTableSort({ by, type })}
        />
        <Pager 
          title="Page"
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          onSelect={setCurrentPage} 
        />
      </div>
    );
  }
}

export default ResultTable;