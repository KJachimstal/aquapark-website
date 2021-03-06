import React from 'react';

import { PricingProvider } from '../../../providers/pricing';

import PricingButtons from './PricingButtons';
import Hero from '../../modules/Hero';
import PricingBackground from '../../../assets/images/hero-pricing.jpg';
import pricing from '../../../data/pricing';
import PricingItem from './PricingItem/PricingItem';

// Images
import PayU from '../../../assets/images/pay/payu.png';
import MasterCard from '../../../assets/images/pay/mastercard.png';
import Visa from '../../../assets/images/pay/visa.png';
import Blik from '../../../assets/images/pay/blik.png';

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
        <h1>Regulamin</h1>
        <div className="pricing-page__regulations">
          <ul>
            <li>Opiekunowi osoby niepełnosprawnej przysługuje darmowe wejście</li>
            <li>Bilet ulgowy przysługuje tylko osobom do 18 roku życia oraz seniorom</li>
            <li>Wstęp do Saunarium wyłącznie dla osób powyżej 18 roku życia</li>
            <li>Wstęp do Siłowni i Fitness do 18 roku życia tylko pod opieką osoby pełnoletniej</li>
            <li>Wstęp do Basenów Rekreacyjnych od 12 roku życia tylko pod opieką osoby dorosłej</li>
            <li>W naszych kasach honorujemy karty płatnicze: VISA, VISA Electron, V PAY</li>
            <li>Karnet imienny ważny jest za okazaniem aktualnego dokumentu ze zdjęciem</li>
          </ul>
        </div>
      </div>
      <div className="container py-4" style={{ opacity: '.7' }}>
        <div className="row align-items-center">
          <div className="col text-center">
            <img src={PayU} alt="PayU"/>
          </div>
          <div className="col text-center">
            <img src={MasterCard} alt="MasterCard"/>
          </div>
          <div className="col text-center">
            <img src={Visa} alt="Visa"/>
          </div>
          <div className="col text-center">
            <img src={Blik} alt="Visa"/>
          </div>
        </div>
      </div>
    </div>
  </PricingProvider>
);

export default Pricing;
