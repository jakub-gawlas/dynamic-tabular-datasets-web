// @flow
import type { NewPost } from '../../typedefs';
import type { Field } from '../../../commons/components/Form'; 

import React, { Component } from 'react';
import Form from '../../../commons/components/Form';

const formFields: Field[] = [
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Post title'
  },
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Post author'
  }
];

type Props = {
  onSubmit: (newPost: NewPost) => void
};

function NewPostForm({ onSubmit }: Props){
  return(
    <Form 
      textSubmitButton="Add post"
      fields={formFields}
      onSubmit={onSubmit}
    />
  );
}

export default NewPostForm;