// @flow

import React from 'react';

/** Components */
import { 
  ButtonGroup as BootstrapButtonGroup, 
  Button 
} from 'react-bootstrap';

/** Types */
type Props = {
  values: number[],
  activeValue: number,
  onSelect: (value: number) => void,
  className?: string
};

/**
 * ButtonGroup component
 */
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