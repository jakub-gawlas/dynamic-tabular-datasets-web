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

function renderButton(value: number, isActive: boolean, onClick: (value: number) => void){
  return(
    <Button 
      active={isActive}
      onClick={() => onClick(value)}
    >
      {value}
    </Button>
  );
}

function NumberItemsSelector({ currentValue, onSelect }: Props){
  return(
    <div className={styles.container}>
      <span className={styles.title}>
        Posts per page
      </span>
      <ButtonToolbar>
        <ButtonGroup>
          {ITEMS_PER_PAGE.map((value) => {
            const isActive = value === currentValue;
            return renderButton(value, isActive, onSelect);
          })}
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default NumberItemsSelector;