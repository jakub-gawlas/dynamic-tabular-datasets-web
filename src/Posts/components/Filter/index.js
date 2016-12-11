// @flow
import type { Field } from '../../../commons/components/Form'; 

import React from 'react';
import Form from '../../../commons/components/Form';
import styles from './styles.css';

type Props = {
  usernameValue: string,
  onChangeUsername: (value: string) => void
}

function Filter({ usernameValue, onChangeUsername }: Props){
  const FILTER_FILEDS: Field[] = [
    {
      name: 'username',
      type: 'text',
      label: 'Author',
      placeholder: 'Filter by author',
      value: usernameValue,
      onChange: onChangeUsername
    }
  ];
  return(
    <Form
      hideSubmitButton fields={FILTER_FILEDS}
      className={styles.container} 
    />
  );
}

export default Filter;