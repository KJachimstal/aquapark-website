import React from 'react';
import {
  StaticGoogleMap,
  Marker,
} from 'react-static-google-map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faEnvelopeOpen, faPhoneAlt, faClock, faRoute,
} from '@fortawesome/free-solid-svg-icons';
import AttractionsBackground from '../../../assets/images/attractions-background.jpg';

const Contact = () => (
  <>
    <div className="hero hero--small" style={{ backgroundImage: `url(${AttractionsBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Kontakt</div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row my-4">
        <div className="col-12 col-lg-6">
          <StaticGoogleMap size="600x400" className="img-fluid rounded" zoom="13" apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
            <Marker location="51.747847,19.454375" color="blue" />
          </StaticGoogleMap>
        </div>
        <div className="col-12 col-lg-6">
          <h2>Łódzki Park Wodny</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-muted mr-2" />
              <span>ul. Politechniki 69, 00-000 Łódź</span>
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="text-muted mr-2" />
              <span>bok@lodzki-park-wodny.pl</span>
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-muted mr-2" />
              <span>123 456 789</span>
            </li>
            <li className="list-group-item d-flex">
              <FontAwesomeIcon icon={faClock} className="text-muted mr-2" />
              <div style={{ marginTop: '-4px' }}>
                <span>Pon - Czw: 6:00 - 22:00</span><br/>
                <span>Pt - Sob: 6:00 - 23:00</span><br/>
                <span>Niedziela: 8:00 - 22:00</span>
              </div>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.google.pl/maps/dir//51.747847,19.454375/@51.747847,19.454375,17.75z/data=!4m2!4m1!3e0"
                className="btn btn-primary mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faRoute} className="mr-2" style={{ opacity: '.7' }} />
                Wyznacz trasę
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
