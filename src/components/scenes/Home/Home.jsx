import React from 'react';
import { Link } from 'react-router-dom';

import HomeBackground from '../../../assets/images/hero-home.jpg';
import SwimmingSchoolImage from '../../../assets/images/home/swimming-school.jpg';
import MobilePaymentImage from '../../../assets/images/home/mobile-payment.jpg';
import SwimmingPool from '../../../assets/images/home/swimming-pool.jpg';

import Slide from '../../../assets/images/attractions/zjezdzalnia.jpg';
import ChildSlide from '../../../assets/images/attractions/dzieci_zjezdzalnia.jpg';
import Sauna from '../../../assets/images/attractions/Sauna.jpg';
import Pool from '../../../assets/images/attractions/basen_dzieci.jpg';
import Massage from '../../../assets/images/attractions/masaz.jpg';
import ChildAttractions from '../../../assets/images/attractions/atrakcje.jpg';

const Home = () => (
  <>
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
    <div className="attractions">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="attractions__item row">
              <div className="attractions__image col-12 col-md-4" style={{ backgroundImage: `url(${Slide})` }}></div>
              <div className="attractions__info col-12 col-md-8">
                <header className="attractions__info-header">Zjeżdzalnie dla dorosłych</header>
                <p className="attractions__info-text">
                  To czerwona rura wychodząca na zewnątrz Aquaparku, która ma aż 24 metry!
                  Dzięki podgrzewanej wodzie można z niej korzystać przez cały rok!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="attractions__item row">
              <div className="attractions__image col-12 col-md-4" style={{ backgroundImage: `url(${ChildSlide})` }}></div>
              <div className="attractions__info col-12 col-md-8">
                <header className="attractions__info-header">Zjeżdzalnie dla dzieci</header>
                <p className="attractions__info-text">
                  Podgrzewana woda, liczne gejzery i kolorowe dekoracje to idealne środowisko
                  dla naszych najmłodszych gości. Łagodna zjeżdżalnia znajdująca się na
                  terenie brodziku.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="attractions__item row">
              <div className="attractions__image col-12 col-md-4" style={{ backgroundImage: `url(${ChildAttractions})` }}></div>
              <div className="attractions__info col-12 col-md-8">
                <header className="attractions__info-header">Atrakcje dla dzieci</header>
                <p className="attractions__info-text">
                  Podgrzewana woda, liczne gejzery i kolorowe dekoracje
                  to idealne środowisko dla naszych najmłodszych gości.
                  Tuż obok znajduje się również półka z kolorowymi, piankowymi przedmiotami.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="attractions__item row">
              <div className="attractions__image col-12 col-md-4" style={{ backgroundImage: `url(${Pool})` }}></div>
              <div className="attractions__info col-12 col-md-8">
                <header className="attractions__info-header">Baseny dla dorosłych i dzieci</header>
                <p className="attractions__info-text">
                  Basen pływacki to miejsce dla osób, które dobrą zabawę
                  lubią połączyć ze sportem. Do dyspozycji naszych klientów są
                  3 tory o głębokości 1,8 do 2,0 m oraz 1 tor o głębokości 90 cm.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="attractions__item row">
              <div className="attractions__image col-12 col-md-4" style={{ backgroundImage: `url(${Sauna})` }}></div>
              <div className="attractions__info col-12 col-md-8">
                <header className="attractions__info-header">Sauna</header>
                <p className="attractions__info-text">
                  Sauna fińska to pomieszczenie ze schodkowo ułożonymi,
                  drewnianymi ławami, ogrzewane do temperatury 100°C.
                  Korzystanie z niej jest doskonałą metodą na detoksykację organizmu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="attractions__item row">
              <div className="attractions__image col-12 col-md-4" style={{ backgroundImage: `url(${Massage})` }}></div>
              <div className="attractions__info col-12 col-md-8">
                <header className="attractions__info-header">Masaż wodny</header>
                <p className="attractions__text">
                  Bicze wodne korzystnie wpływają na skórę, usuwają zmęczenie
                  oraz odprężają. Przy tym oprawiają samopoczucie, dodają energii
                  i pozwalają poczuć się świeżo i młodo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
