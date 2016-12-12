// @flow

import React from 'react';
import { 
  ButtonGroup as BootstrapButtonGroup, 
  Button 
} from 'react-bootstrap';

type Props = {
  values: number[],
  activeValue: number,
  onSelect: (value: number) => void,
  className?: string
};

function ButtonGroup({ values, activeValue, onSelect, className}: Props){

  const buttons = values.map((value, idx) => (
    <Button 
      active={activeValue === value}
      onClick={() => onSelect(value)}
      key={idx}
    >
      {value}
    </Button>
  ));

  return(
    <BootstrapButtonGroup className={className}>
      {buttons}
    </BootstrapButtonGroup>
  );
}

export default ButtonGroup;