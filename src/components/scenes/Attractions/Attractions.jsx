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
    <div className="hero" style={{ backgroundImage: `url(${AttractionsBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Atrakcje</div>
        </div>
      </div>
    </div>
    <div className="attractions">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="attractions__item">
              <div className="attractions__image">
                <img src={Slide} alt=""/>
              </div>
              <header className="attractions__info">Zjeżdzalnie dla dorosłych</header>
            </div>
          </div>
          <div className="col">
            <div className="attractions__item">
              <div className="attractions__image">
                <img src={ChildSlide} alt=""/>
              </div>
              <header className="attractions__info">Zjeżdzalnie dla dzieci</header>
            </div>
          </div>
          <div className="col">
            <div className="attractions__item">
              <div className="attractions__image">
                <img src={ChildAttractions} alt=""/>
              </div>
              <header className="attractions__info">Atrakcje dla dzieci</header>
            </div>
          </div>
          <div className="col">
            <div className="attractions__item">
              <div className="attractions__image">
                <img src={Pool} alt=""/>
              </div>
              <header className="attractions__info">Baseny dla dorosłych i dzieci</header>
            </div>
          </div>
          <div className="col">
            <div className="attractions__item">
              <div className="attractions__image">
                <img src={Sauna} alt=""/>
              </div>
              <header className="attractions__info">Sauna</header>
            </div>
          </div>
          <div className="col">
            <div className="attractions__item">
              <div className="attractions__image">
                <img src={Massage} alt=""/>
              </div>
              <header className="attractions__info">Masaż wodny</header>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Attractions;
