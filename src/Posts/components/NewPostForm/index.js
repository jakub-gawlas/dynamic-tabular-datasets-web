// @flow
import type { Field } from '../../../commons/components/Form'; 

import React from 'react';
import PostsStore from '../../store';
import Form from '../../../commons/components/Form';
import styles from './styles.css';

type Props = {
  className?: string
};

const FORM_FIELDS: Field[] = [
  {
    name: 'username',
    label: 'Author',
    type: 'text',
    placeholder: 'Post author'
  },
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Post title'
  }
];

function NewPostForm({ className }: Props){
  return(
    <Form 
      textSubmitButton="Add post"
      fields={FORM_FIELDS}
      onSubmit={PostsStore.addPost}
      className={[styles.container, className].join(' ')}
    />
  );
}

export default NewPostForm;