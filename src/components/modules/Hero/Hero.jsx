import React from 'react';

const Hero = ({ image, children }) => (
  <div className="hero" style={{ backgroundImage: `url(${image})` }}>
    <div className="hero__content">
      <div className="container hero__container">
        {children}
      </div>
    </div>
  </div>
);

export default Hero;
