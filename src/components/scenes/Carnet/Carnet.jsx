import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';

import CarnetBackground from '../../../assets/images/hero-carnet.jpg';


import carnets from '../../../data/carnets.js';

const Carnet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openCarnet = (id) => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
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
          {carnets.map((carnet, index) => (
            <div className="col-12 col-md-4" key={carnet.name}>
              <div className="carnets__item" style={{ backgroundImage: `url(${carnet.image})` }} onClick={() => openCarnet(index)}>
                <div className="carnets__price">
                  <div className="carnets__price-value">{carnet.price}</div>
                  <div className="carnets__price-currency">PLN</div>
                </div>
                <div className="carnets__preview">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p>
          <strong>Uwaga! Rabat dla stałych klientów. Jeśli zakupisz kolejny karnet AquaCard VIP
          w trakcie trwania ważności posiadanego obecnie karnetu skorzystasz z 10% zniżki!</strong>
        </p>
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
      </div>
    </>
  );
};

export default Carnet;
