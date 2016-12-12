// @flow
import type { Field } from '../../../commons/components/Form'; 

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PostsStore from '../../store';
import Form from '../../../commons/components/Form';

type Props = {
  className?: string
};

@observer
class Filter extends Component {
  props: Props

  getFormFileds(): Field[]{
    const { 
      settingsResultTable, 
      setResultTableFilter 
    } = PostsStore;
    
    return [
      {
        name: 'username',
        type: 'text',
        label: 'Author',
        placeholder: 'Filter by author',
        value: settingsResultTable.get('filter').username,
        onChange: (value) => setResultTableFilter({ username: value })
      }
    ];
  }

  render(){
    return(
      <Form
        hideSubmitButton 
        fields={this.getFormFileds()}
        className={this.props.className}
      />
    );
  }
}

export default Filter;