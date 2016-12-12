// @flow

import React from 'react';

/** Components */
import Posts from '../../../Posts';

/** Styles */
import styles from './styles.css';

function Main(){
  return(
    <div className={styles.container}>
      <Posts />
    </div>
  );
}

export default Main;