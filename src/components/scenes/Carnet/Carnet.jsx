import React from 'react';

import CarnetBackground from '../../../assets/images/hero-carnet.jpg';
import ZoneOne from '../../../assets/images/carnet/s1.jpg';
import ZoneTwo from '../../../assets/images/carnet/s2.jpg';
import VipZone from '../../../assets/images/carnet/vip.jpg';

const Carnet = () => (
  <>
    <div className="hero hero--small" style={{ backgroundImage: `url(${CarnetBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Karnet</div>
        </div>
      </div>
    </div>
    <div className="container py-4">
      <h1 className="mb-4">Oferta dla częstych gości</h1>
      <p>
        Karnet AquaCard to nowoczesne narzędzie umożliwiające elastyczną formę
        korzystania z usług wrocławskiego Aquaparku. Stworzyliśmy ofertę karnetów
        AquaCard, czyli kart za pomocą których można dowolnie komponować i zestawiać
        wybrane usługi Siłowni, Fitness, Saunarium oraz Basenów Rekreacyjnych i Sportowych.
        Jednorazowy koszt wejścia może wynosić nawet 5,90 zł, w zależności od wybranego pakietu
        oraz częstotliwości korzystania z zakupionego karnetu.
      </p>
      <div className="carnets row py-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="carnets__item" style={{ backgroundImage: `url(${ZoneOne})` }}>
            <div className="carnets__price">
              <div className="carnets__price-value">160</div>
              <div className="carnets__price-currency">PLN</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="carnets__item" style={{ backgroundImage: `url(${ZoneTwo})` }}>
            <div className="carnets__price">
              <div className="carnets__price-value">200</div>
              <div className="carnets__price-currency">PLN</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="carnets__item" style={{ backgroundImage: `url(${VipZone})` }}>
            <div className="carnets__price">
              <div className="carnets__price-value">240</div>
              <div className="carnets__price-currency">PLN</div>
            </div>
          </div>
        </div>
      </div>
      <p>
        <strong>Uwaga! Rabat dla stałych klientów. Jeśli zakupisz kolejny karnet AquaCard VIP
        w trakcie trwania ważności posiadanego obecnie karnetu skorzystasz z 10% zniżki!</strong>
      </p>
      <p>
        <ul>
          <li>
            Klient, który zakupił karnet w promocji i chce go przedłużyć o kolejny miesiąc lub
            3 miesiące może to zrobić i skorzystać z 10 % zniżki na zakup nowego karnetu
            (w trakcie ważności obecnego). Ważne! Kolejny karnet jest zakupiony w regularnej
            cenie – 10%
          </li>
          <li>
            Klient, który będzie chciał przedłużyć karnet w okresie, kiedy właśnie trwa promocja
            nie ma możliwości zakupu karnetu ze zniżką, ponieważ promocje się nie łączą!
          </li>
        </ul>
      </p>
    </div>
  </>
);

export default Carnet;
