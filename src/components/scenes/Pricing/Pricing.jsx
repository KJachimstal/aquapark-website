import React from 'react';

import { PricingProvider } from '../../../providers/pricing';

import PricingButtons from './PricingButtons';
import Hero from '../../modules/Hero';
import PricingBackground from '../../../assets/images/hero-pricing.jpg';
import pricing from '../../../data/pricing';
import PricingItem from './PricingItem/PricingItem';

const Pricing = () => (
  <PricingProvider>
    <div className="pricing-page">
      <Hero image={PricingBackground}>
        <div className="pricing-page__gradient"></div>
      </Hero>
      <div className="pricing">
        <PricingButtons />
        <div className="pricing__container container">
          <div className="row">
            {pricing.map(item => (
              <PricingItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </PricingProvider>
);

export default Pricing;
