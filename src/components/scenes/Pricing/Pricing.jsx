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
      <div className="pricing-page__content container">
        <h1>Regulamin:</h1>
        <div className="pricing-page__content__regulations">
          <li>Opiekunowi osoby niepełnosprawnej przysługuje darmowe wejście</li>
          <li>Bilet ulgowy przysługuje tylko osobom do 18 roku życia oraz seniorom</li>
          <li>Wstęp do Saunarium wyłącznie dla osób powyżej 18 roku życia</li>
          <li>Wstęp do Siłowni i Fitness do 18 roku życia tylko pod opieką osoby pełnoletniej</li>
          <li>Wstęp do Basenów Rekreacyjnych od 12 roku życia tylko pod opieką osoby dorosłej</li>
          <li>W naszych kasach honorujemy karty płatnicze: VISA, VISA Electron, V PAY</li>
          <li>Karnet imienny ważny jest za okazaniem aktualnego dokumentu ze zdjęciem</li>
        </div>
      </div>
    </div>
  </PricingProvider>
);

export default Pricing;
