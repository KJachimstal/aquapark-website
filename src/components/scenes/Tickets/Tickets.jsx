import React from 'react';
import TicketsBackground from '../../../assets/images/hero-tickets.jpg';

const Tickets = () => {
  return (
    <>
      <div className="hero hero--small" style={{ backgroundImage: `url(${TicketsBackground})` }}>
        <div className="hero__content hero__content--header">
          <div className="container">
            <div className="display-4">Bilety</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
