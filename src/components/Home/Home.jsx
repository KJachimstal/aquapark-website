import React from 'react';
import HomeBackground from '../../assets/images/home-background.png';

const Home = () => (
  <div className="hero" style={{ backgroundImage: `url(${HomeBackground})` }}>
    <div className="hero__content"></div>
  </div>
);

export default Home;
