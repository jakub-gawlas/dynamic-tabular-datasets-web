// @flow

import React, { Component } from 'react';

/** Components */
import {
  ButtonGroup,
  Button, 
  Table as BootstrapTable
} from 'react-bootstrap';

/** Styles */
import styles from './styles.css';

/** Types */
export type Row = any;

export type Header = {
  name: string,
  label: string,
};

export type OnClickSort = (name: string, type: 'asc' | 'desc') => void;

type Props = {
  headers: Header[],
  rows: Row[],
  onClickSort: OnClickSort,
  shouldHighlightRow: (row: Row) => boolean
};

/** 
 * Table component
 */
class Table extends Component {
  props: Props

  static defaultProps = {
    shouldHighlightRow: () => false
  }
 
  renderHeaders = () => {
    const { headers, onClickSort } = this.props;
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

  renderRows = () => {
    const { rows, shouldHighlightRow } = this.props;

    if(rows.length === 0) {
      return this.renderInfoNoItems();
    }

    return rows.map((row, idx) => {
      const isHighlight = shouldHighlightRow(row);
      return this.renderRow(row, isHighlight, idx);
    });
  }

  renderRow = (row: Row, isHighlight: boolean, key: number) => {
    const { headers } = this.props;
    return(
      <tr className={isHighlight && styles['row--highlight']} key={key}>
        {headers.map(({ name }, idx) => (
          <td className={styles.row__td} key={idx}>
            {row[name]}
          </td>
        ))}
      </tr>
    );
  }

  renderInfoNoItems = () => {
    return(
      <tr>
        <td className={styles.row__td} colSpan="100">
          No items
        </td>
      </tr>
    );
  }

  render(){
    return(
      <BootstrapTable striped bordered condensed>
        <thead>
          {this.renderHeaders()}
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </BootstrapTable>
    );
  }
}

export default Table;