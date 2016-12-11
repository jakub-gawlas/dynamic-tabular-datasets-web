// @flow

import React from 'react';
import {
  ButtonGroup,
  Button, 
  Table
} from 'react-bootstrap';
import styles from './styles.css';

type Props = {
  headers: Header[],
  rows: Row[],
  onClickSort: OnClickSort
};

type Row = any;

export type Header = {
  name: string,
  label: string,
};

export type OnClickSort = (name: string, type: 'asc' | 'desc') => void;

function renderHeader({ name, label }: Header, onClickSort: OnClickSort){
  return(
    <th>
      {label}
      <ButtonGroup bsSize="xsmall" className={styles.header__sort__container}>
        <Button onClick={() => onClickSort(name, 'asc')}>
          ↑
        </Button>
        <Button onClick={() => onClickSort(name, 'desc')}>
          ↓
        </Button>
      </ButtonGroup>
    </th>
  );
}

function renderRow(headers: Header[], row: Row){
  return(
    <tr>
      {headers.map(({ name }) => <td>{row[name]}</td>)}
    </tr>
  );
}

function renderInfoNoItems(){
  return(
    <tr>
      <td className={styles['row__td--info']} colSpan="100">
        No items
      </td>
    </tr>
  );
}

function GenericTable({headers, rows, onClickSort}: Props){
  return(
    <Table striped bordered condensed>
      <thead>
        <tr>
          {headers.map((header) => renderHeader(header, onClickSort))}
        </tr>
      </thead>
      <tbody>
        {
          rows.length > 0 ?
            rows.map((row) => renderRow(headers, row))
          :
            renderInfoNoItems()
        }
      </tbody>
    </Table>
  );
}

export default GenericTable;