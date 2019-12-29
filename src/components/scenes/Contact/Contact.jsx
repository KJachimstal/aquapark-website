import React from 'react';
import {
  StaticGoogleMap,
  Marker,
} from 'react-static-google-map';

import AttractionsBackground from '../../../assets/images/attractions-background.jpg';

const Attractions = () => (
  <>
    <div className="hero hero--small" style={{ backgroundImage: `url(${AttractionsBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Kontakt</div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <StaticGoogleMap size="600x400" className="img-fluid" zoom="13" apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
            <Marker location="51.747847,19.454375" color="blue"  />
          </StaticGoogleMap>
        </div>
        <div className="col-12 col-lg-6"></div>
      </div>
    </div>
  </>
);

export default Attractions;
