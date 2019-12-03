import React from 'react';
import HomeBackground from '../../assets/images/Baltic-Park-Molo-Aquapark.jpg';
// import HomeBackground from '../../assets/images/home-background.png';

const Home = () => (
  <div className="hero" style={{ backgroundImage: `url(${HomeBackground})` }}>
    <div className="hero__content">
      <div className="container-fluid">Jakiś teskt żeby sprawdzić.</div>
    </div>
  </div>
);

export default Home;
