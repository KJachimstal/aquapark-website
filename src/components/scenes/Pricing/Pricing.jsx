import React from 'react';
import Hero from '../../modules/Hero';
import PricingBackground from '../../../assets/images/hero-pricing.jpg';

const Pricing = () => (
  <>
    <Hero image={PricingBackground} />
    <div className="pricing">
      <div className="pricing__container container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Pricing;
