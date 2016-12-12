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

export type ActiveSort = {
  name: string,
  type: 'asc' | 'desc'
}

type Props = {
  headers: Header[],
  rows: Row[],
  activeSort?: ActiveSort,
  onClickSort: OnClickSort,
  shouldHighlightRow: (row: Row) => boolean,
};

/** 
 * Table component
 */
class Table extends Component {
  props: Props

  static defaultProps = {
    shouldHighlightRow: () => false
  }

  isActiveSort = ({ name, type }: ActiveSort) => {
    const { activeSort } = this.props;
    if(!activeSort) return false;
    return (name === activeSort.name) && (type === activeSort.type);
  }
 
  renderHeaders = () => {
    const { headers, onClickSort } = this.props;
    const ACTIVE_SORT_CLASSNAME = styles['header__sort__button--active']; 
    return(
      <tr>
      {headers.map(({ name, label }, idx) => (
        <th className={styles['text-center']} key={idx}>
          {label}
          <ButtonGroup bsSize="xsmall" className={styles.header__sort__container}>
            <Button 
              className={this.isActiveSort({ name, type: 'asc' }) && ACTIVE_SORT_CLASSNAME} 
              onClick={() => onClickSort(name, 'asc')}
            >
              ↑
            </Button>
            <Button
              className={this.isActiveSort({ name, type: 'desc' }) && ACTIVE_SORT_CLASSNAME} 
              onClick={() => onClickSort(name, 'desc')}
            >
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