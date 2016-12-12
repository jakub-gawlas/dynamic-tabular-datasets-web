// @flow

import React, { Component } from 'react';

/** Components */
import { 
  Form as BootstrapForm,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

/** Styles */
import styles from './styles.css';

/** Types */
export type Field = {
  name: string,
  label: string,
  type: string,
  placeholder?: string,
  value?: string | number,
  onChange?: (value: string) => void
};

type Props = {
  textSubmitButton?: string,
  hideSubmitButton?: boolean,
  fields: Field[],
  onSubmit?: (fieldsValues: any) => void,
  className?: string
};

/**
 * Form component
 */
class Form extends Component {
  props: Props

  static defaultProps = {
    hideSubmitButton: false
  }

  refsFields = {}

  onClickButton = (event: any) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit && onSubmit(this.getFieldsValues());
    this.clearFields();
  }

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

  renderField = ({ name, label, type, placeholder, value, onChange }: Field, idx: number) => {
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
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
        />
      </FormGroup>
    );
  }

  renderSubmitButton(){
    const { textSubmitButton } = this.props;
    return (
      <Button type="submit" onClick={this.onClickButton}>
        {textSubmitButton}
      </Button>
    );
  }

  render(){
    const { fields, hideSubmitButton, className } = this.props;
    return(
      <BootstrapForm inline className={className}>
        {fields.map(this.renderField)}
        {!hideSubmitButton && this.renderSubmitButton()}
      </BootstrapForm>
    );
  }
}

export default Form;