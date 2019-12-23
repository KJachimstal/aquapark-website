import React from 'react';

import CarnetBackground from '../../../assets/images/hero-carnet.jpg';

const Carnet = () => (
  <>
    <div className="hero hero--small" style={{ backgroundImage: `url(${CarnetBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Karnet</div>
        </div>
      </div>
    </div>
  </>
);

export default Carnet;
