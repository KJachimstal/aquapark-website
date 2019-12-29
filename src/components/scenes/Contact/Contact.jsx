import React from 'react';
import AttractionsBackground from '../../../assets/images/attractions-background.jpg';
import Slide from '../../../assets/images/attractions/zjezdzalnia.jpg';
import ChildSlide from '../../../assets/images/attractions/dzieci_zjezdzalnia.jpg';
import Sauna from '../../../assets/images/attractions/Sauna.jpg';
import Pool from '../../../assets/images/attractions/basen_dzieci.jpg';
import Massage from '../../../assets/images/attractions/masaz.jpg';
import ChildAttractions from '../../../assets/images/attractions/atrakcje.jpg';

const Attractions = () => (
  <>
    <div className="hero hero--small" style={{ backgroundImage: `url(${AttractionsBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Kontakt</div>
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

export default Attractions;
