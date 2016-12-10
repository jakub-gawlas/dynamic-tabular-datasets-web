// @flow

import React from 'react';
import Posts from '../../Posts';
import styles from './styles.css';

function Main(){
  return(
    <div className={styles.container}>
      <div className={styles.table}>
        <Posts />
      </div>
    </div>
  );
}

export default Main;