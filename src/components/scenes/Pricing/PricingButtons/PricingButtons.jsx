import React, { useContext } from 'react';

import { ButtonGroup, Button } from 'reactstrap';
import { PricingContext } from '../../../../providers/pricing';


const PricingButtons = () => {
  const pricingContext = useContext(PricingContext);
  const { state: { type } } = pricingContext;

  const onButtonClick = (_type, _name) => {
    pricingContext.dispatch({ type: 'change_type', pricingType: _type, pricingName: _name });
  };

  return (
    <div className="container">
      <ButtonGroup>
        <Button
          onClick={() => onButtonClick('regular', 'normalny')}
          className={type === 'regular' ? 'active' : ''}
        >
          Normalny
        </Button>
        <Button
          onClick={() => onButtonClick('discount', 'ulgowy')}
          className={type === 'discount' ? 'active' : ''}
        >
          Ulgowy
        </Button>
        <Button
          onClick={() => onButtonClick('family', 'rodzinny')}
          className={type === 'family' ? 'active' : ''}
        >
          Rodzinny
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PricingButtons;
