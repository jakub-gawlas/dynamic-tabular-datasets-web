// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PostsStore from '../../store';
import ButtonGroup from './ButtonGroup';
import styles from './styles.css';

type Props = {
  className?: string 
};

const ITEMS_PER_PAGE = [5, 10, 15, 20];

@observer
class PostsPerPage extends Component {
  props: Props

  render(){
    const { className } = this.props;
    const {
      settingsResultTable,
      setPostsPerPage
    } = PostsStore;

    return(
      <div className={[styles.container, className].join(' ')}>
        <span className={styles.title}>
          Posts per page
        </span>
        <ButtonGroup 
          values={ITEMS_PER_PAGE}
          activeValue={settingsResultTable.get('postsPerPage')}
          onSelect={setPostsPerPage}
        />
      </div>
    );
  }
}

export default PostsPerPage;