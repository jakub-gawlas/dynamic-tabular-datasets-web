// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';

/** Stores */
import PostsStore from '../../store';

/** Components */
import ButtonGroup from './ButtonGroup';

/** Styles */
import styles from './styles.css';

/** Types */
type Props = {
  className?: string 
};

/** Available values of number items per page  */
const ITEMS_PER_PAGE = [5, 10, 15, 20];

/** 
 * PostsPerPage component
 */
@observer
class PostsPerPage extends Component {
  props: Props

  render(){
    const { className } = this.props;
    const {
      postsPerPage,
      setPostsPerPage
    } = PostsStore;

    return(
      <div className={[styles.container, className].join(' ')}>
        <span className={styles.title}>
          Posts per page
        </span>
        <ButtonGroup 
          values={ITEMS_PER_PAGE}
          activeValue={postsPerPage}
          onSelect={setPostsPerPage}
        />
      </div>
    );
  }
}

export default PostsPerPage;