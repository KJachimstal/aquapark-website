import React from 'react';
import Hero from '../../modules/Hero';
import PricingBackground from '../../../assets/images/hero-pricing.jpg';
import pricing from '../../../data/pricing';
import PricingItem from './PricingItem/PricingItem';

const Pricing = () => (
  <>
    <Hero image={PricingBackground} />
    <div className="pricing">
      <div className="pricing__container container">
        <div className="row">
          {pricing.map(item => <PricingItem key={item.title} {...item} />)}
        </div>
      </div>
    </div>
  </>
);

export default Pricing;
