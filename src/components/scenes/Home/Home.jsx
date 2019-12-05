import React from 'react';
import { Link } from 'react-router-dom';

import HomeBackground from '../../../assets/images/hero-home.jpg';
import SwimmingSchoolImage from '../../../assets/images/home/swimming-school.jpg';
import MobilePaymentImage from '../../../assets/images/home/mobile-payment.jpg';
import SwimmingPool from '../../../assets/images/home/swimming-pool.jpg';
// import HomeBackground from '../../assets/images/home-background.png';

const Home = () => (
  <div className="hero" style={{ backgroundImage: `url(${HomeBackground})` }}>
    <div className="hero__content">
      <div className="container hero__container">
        <div className="row align-items-stretch">
          <div className="col-7 hero__column">
            <Link to="/bilety" className="hero__item hero__item--main">
              <div className="hero__image">
                <img src={SwimmingPool} alt=""/>
              </div>
              <header className="hero__header hero__header--big">Ferie w Aquaparku</header>
              <div className="hero__body">
                Oszczędzaj czas dzięki możliwości zakupu biletu online
              </div>
            </Link>
          </div>
          <div className="col-5 hero__column">
            <Link to="/bilety" className="hero__item hero__item--addition">
              <div className="hero__image">
                <img src={MobilePaymentImage} alt=""/>
              </div>
              <header className="hero__header hero__header--medium">Kupuj online</header>
              <div className="hero__body">
                Oszczędzaj czas dzięki możliwości zakupu biletu online
              </div>
            </Link>
            <Link to="/szkola-plywania" className="hero__item hero__item--addition">
              <div className="hero__image">
                <img src={SwimmingSchoolImage} alt=""/>
              </div>
              <header className="hero__header hero__header--medium">Szkoła pływania</header>
              <div className="hero__body">
                Przez cały sierpień będziemy sukcesywnie dodawać nowe grupy
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Home;
