// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PostsStore from '../../store';
import ResultTable from '../../components/ResultTable';
import NewPostForm from '../../components/NewPostForm';
import styles from './styles.css';

@observer
class ManagePanel extends Component {
  render(){
    const {
      resultPosts,
      numberOfPages,
      currentPage,
      setCurrentPage,
      setResultTableSort
    } = PostsStore;

    return(
      <div className={styles.container}>
        <ResultTable 
          posts={resultPosts}
          numberOfPages={numberOfPages}
          currentPage={currentPage} 
          onSelectPage={setCurrentPage}
          onClickSort={(by, type) => setResultTableSort({ by, type })}
        />
        <NewPostForm onSubmit={PostsStore.addPost} />
      </div>
    );
  }
}

export default ManagePanel;