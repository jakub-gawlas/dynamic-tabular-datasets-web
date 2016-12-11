// @flow

import React from 'react';
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Pagination
 } from 'react-bootstrap';

type Props = {
  numberOfPages: number,
  currentPage: number,
  onSelectPage: (page: number) => void,
  itemsPerPage: number,
  onSelectItemsPerPage: (items: number) => void
}

const ITEMS_PER_PAGE = [5, 10, 15, 25];

function renderSelectItemsPerPage(activeValue: number, onClick: (items: number) => void){
  return(
    <ButtonToolbar>
      <ButtonGroup>
        {ITEMS_PER_PAGE.map((value) => (
          <Button 
            active={value === activeValue}
            onClick={() => onClick(value)}
          >
            {value}
          </Button>)
        )}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

function Pager({ numberOfPages, currentPage, onSelectPage, itemsPerPage, onSelectItemsPerPage }: Props){
  return(
    <div>
      {renderSelectItemsPerPage(itemsPerPage, onSelectItemsPerPage)}
      <Pagination 
          bsSize="medium"
          items={numberOfPages}
          activePage={currentPage}
          onSelect={onSelectPage}
      />
    </div>
  );
}

export default Pager;