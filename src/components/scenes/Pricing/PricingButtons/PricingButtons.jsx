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
      <div className="row pb-4">
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
          <h1 className="text-white">Ceny biletów</h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center pb-2">
          <ButtonGroup className="pricing__buttons">
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
      </div>
    </div>
  );
};

export default PricingButtons;
