// @flow

import React from 'react';
import {
  ButtonToolbar,
  ButtonGroup,
  Button
 } from 'react-bootstrap';
import styles from './styles.css';

type Props = {
  currentValue: number,
  onSelect: (items: number) => void
}

const ITEMS_PER_PAGE = [5, 10, 15, 25];

function renderButtons(currentValue: number, onClick: (value: number) => void){
  return(
    <ButtonGroup>
    {ITEMS_PER_PAGE.map((value, idx) => (
      <Button 
        active={currentValue === value}
        onClick={() => onClick(value)}
        key={idx}
      >
        {value}
      </Button>
    ))}
    </ButtonGroup>
  );
}

function NumberItemsSelector({ currentValue, onSelect }: Props){
  return(
    <div className={styles.container}>
      <span className={styles.title}>
        Posts per page
      </span>
      <ButtonToolbar>
        {renderButtons(currentValue, onSelect)}
      </ButtonToolbar>
    </div>
  );
}

export default NumberItemsSelector;