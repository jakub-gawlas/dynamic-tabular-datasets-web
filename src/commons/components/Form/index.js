// @flow

import React, { Component } from 'react';
import { 
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import styles from './styles.css';

export type Field = {
  name: string,
  label: string,
  type: string,
  placeholder: string
};

type Props = {
  textSubmitButton: string,
  fields: Field[],
  onSubmit: (fieldsValues: any) => void
};

class GenericForm extends Component {
  props: Props

  refsFields = {}

  getFieldsValues = () => {
    const { fields } = this.props;
    return fields.reduce((result, { name }) => {
      result[name] = this.refsFields[name].value;
      return result;
    }, {});
  }

  clearFields = () => {
    const { fields } = this.props;
    fields.forEach(({ name }) => this.refsFields[name].value = '');
  }

  onClickButton = (event: any) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.getFieldsValues());
    this.clearFields();
  }

  renderField = ({ name, label, type, placeholder }: Field, idx: number) => {
    return(
      <FormGroup className={styles.field__container} key={idx}>
        <ControlLabel>
          {label}
        </ControlLabel>
        <FormControl 
          type={type} 
          placeholder={placeholder}
          inputRef={(ref) => this.refsFields[name] = ref}
          className={styles.field__input}
        />
      </FormGroup>
    );
  }

  render(){
    const { textSubmitButton, fields } = this.props;
    return(
      <Form inline>
        {fields.map(this.renderField)}
        <Button type="submit" onClick={this.onClickButton}>
          {textSubmitButton}
        </Button>
      </Form>
    );
  }
}

export default GenericForm;