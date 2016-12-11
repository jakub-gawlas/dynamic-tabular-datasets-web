// @flow

import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './styles.css';

export type Header = {
  name: string,
  label: string,
};

type OnClickSort = (name: string, type: 'asc' | 'desc') => void;

type Props = {
  headers: Header[],
  rows: any[],
  onClickSort: OnClickSort
};

function renderHeader({ name, label }: Header, onClickSort: OnClickSort){
  return(
    <th>
      {label}
      <button onClick={() => onClickSort(name, 'asc')}>
        +
      </button>
      <button onClick={() => onClickSort(name, 'desc')}>
        -
      </button>
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

function GenericTable({headers, rows, onClickSort}: Props){
  return(
    <Table striped bordered condensed>
      <thead>
        <tr>
          {headers.map((header) => renderHeader(header, onClickSort))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => renderRow(headers, row))}
      </tbody>
    </Table>
  );
}

export default GenericTable;