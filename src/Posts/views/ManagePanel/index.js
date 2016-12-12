// @flow

import React from 'react';
import Filter from '../../components/Filter';
import PostsPerPage from '../../components/PostsPerPage';
import ResultTable from '../../components/ResultTable';
import NewPostForm from '../../components/NewPostForm';
import styles from './styles.css';

function ManagePanel(){
  return(
    <div className={styles.container}>
      <div className={styles.filter__container}>
        <Filter />
        <PostsPerPage />
      </div>
      <ResultTable />
      <NewPostForm />
    </div>
  );
}

export default ManagePanel;