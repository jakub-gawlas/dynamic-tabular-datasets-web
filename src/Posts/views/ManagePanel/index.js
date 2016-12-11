// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PostsStore from '../../store';
import Filter from '../../components/Filter';
import NumberItemsSelector from '../../components/NumberItemsSelector';
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
      setResultTableSort,
      setResultTableFilter,
      setPostsPerPage,
      settingsResultTable
    } = PostsStore;

    const { postsPerPage, filter } = settingsResultTable.toJS();
    
    return(
      <div className={styles.container}>
        <div className={styles.filter__container}>
          <Filter 
            usernameValue={filter.username}
            onChangeUsername={(value) => setResultTableFilter({ username: value })}
          />
          <NumberItemsSelector
            currentValue={postsPerPage}
            onSelect={setPostsPerPage}
          />
        </div>
        <ResultTable 
          posts={resultPosts}
          numberOfPages={numberOfPages}
          currentPage={currentPage} 
          onSelectPage={setCurrentPage}
          onClickSort={(by, type) => setResultTableSort({ by, type })}
          itemsPerPage={postsPerPage}
          onSelectItemsPerPage={setPostsPerPage}
        />
        <NewPostForm onSubmit={PostsStore.addPost} />
      </div>
    );
  }
}

export default ManagePanel;