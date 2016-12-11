// @flow

import React from 'react';
import {
  ButtonGroup,
  Button, 
  Table
} from 'react-bootstrap';
import styles from './styles.css';

type Row = any;

export type Header = {
  name: string,
  label: string,
};

export type OnClickSort = (name: string, type: 'asc' | 'desc') => void;

type Props = {
  headers: Header[],
  rows: Row[],
  onClickSort: OnClickSort
};

function renderHeaders(headers: Header[], onClickSort: OnClickSort){
  return(
    <tr>
    {headers.map(({ name, label }, idx) => (
      <th className={styles['text-center']} key={idx}>
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
    ))}
    </tr>
  );
}

function renderRow(row: Row, headers: Header[], key: number){
  return(
    <tr key={key}>
      {headers.map(({ name }, idx) => (
        <td className={styles['text-center']} key={idx}>
          {row[name]}
        </td>
      ))}
    </tr>
  );
}

function renderInfoNoItems(){
  return(
    <tr>
      <td className={styles['text-center']} colSpan="100">
        No items
      </td>
    </tr>
  );
}

function GenericTable({headers, rows, onClickSort}: Props){
  return(
    <Table striped bordered condensed>
      <thead>
        {renderHeaders(headers, onClickSort)}
      </thead>
      <tbody>
        {
          rows.length > 0 ?
            rows.map((row, idx) => renderRow(row, headers, idx))
          :
            renderInfoNoItems()
        }
      </tbody>
    </Table>
  );
}

export default GenericTable;