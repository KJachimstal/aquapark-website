import React, { useContext } from 'react';
import { PricingContext } from '../../../../providers/pricing';

const PricingItem = ({ title, price }) => {
  const pricingContext = useContext(PricingContext);
  const { state: { type, name } } = pricingContext;

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="pricing__item">
        <div className="pricing__price">
          <div className="pricing__price-value">{price[type]}</div>
          <div className="pricing__price-currency">PLN</div>
        </div>
        <div className="pricing__title">{title}</div>
        <div className="pricing__content">bilet {name}</div>
      </div>
    </div>
  );
};

export default PricingItem;
