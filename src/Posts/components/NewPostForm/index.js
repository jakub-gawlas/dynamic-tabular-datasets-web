// @flow
import type { Field } from '../../../commons/components/Form'; 

import React from 'react';

/** Stores */
import PostsStore from '../../store';

/** Components */
import Form from '../../../Commons/components/Form';

/** Styles */
import styles from './styles.css';

/** Types */
type Props = {
  className?: string
};

/** Fields of form */
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

/**
 * NewPostForm component
 */
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