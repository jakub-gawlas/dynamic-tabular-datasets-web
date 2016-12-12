// @flow

import React from 'react';

/** Components */
import { Pagination } from 'react-bootstrap';

/** Styles */
import styles from './styles.css';

/** Types */
type Props = {
  title: string,
  numberOfPages: number,
  currentPage: number,
  onSelect: (page: number) => void, 
  className?: string
}

/** 
 * Pager component 
 */
function Pager({ title, numberOfPages, currentPage, onSelect, className }: Props){

  /** Minimal value number of pages passed to Pagination is 1 */
  const items = Math.max(1, numberOfPages);

  return(
    <div className={[styles.container, className].join(' ')}>
      <span className={styles.title}>
        {title}
      </span>
      <Pagination 
          bsSize="medium"
          items={items}
          activePage={currentPage}
          onSelect={onSelect}
      />
    </div>
  );
}

export default Pager;