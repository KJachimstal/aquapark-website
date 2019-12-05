import React, { useState } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

import Hero from '../../modules/Hero';
import PricingBackground from '../../../assets/images/hero-pricing.jpg';
import pricing from '../../../data/pricing';
import PricingItem from './PricingItem/PricingItem';

const Pricing = () => {
  const [type, setType] = useState('regular');

  const onButtonClick = (_type) => {
    setType(_type);
  };

  return (
    <>
      <Hero image={PricingBackground} />
      <div className="pricing">
        <div className="container">
          <ButtonGroup>
            <Button
              onClick={() => onButtonClick('regular')}
              className={type === 'regular' ? 'active' : ''}
            >
              Normalny
            </Button>
            <Button
              onClick={() => onButtonClick('discount')}
              className={type === 'discount' ? 'active' : ''}
            >
              Ulgowy
            </Button>
            <Button
              onClick={() => onButtonClick('family')}
              className={type === 'family' ? 'active' : ''}
            >
              Rodzinny
            </Button>
          </ButtonGroup>
        </div>
        <div className="pricing__container container">
          <div className="row">
            {pricing.map(item => (
              <PricingItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
