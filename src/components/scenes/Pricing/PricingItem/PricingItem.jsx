import React from 'react';

const PricingItem = ({ title }) => (
  <div className="col-12 col-md-6 col-lg-3">
    <div className="pricing__item">
      <div className="pricing__price">
        <div className="pricing__price-value">49</div>
        <div className="pricing__price-currency">PLN</div>
      </div>
      <div className="pricing__title">{title}</div>
      <div className="pricing__content">dla studenta</div>
    </div>
  </div>
);

export default PricingItem;
