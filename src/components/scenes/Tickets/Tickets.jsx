import React from 'react';

import Ticket from './Ticket';
import TicketsBackground from '../../../assets/images/hero-tickets.jpg';
import pricings from '../../../data/pricing';

const Tickets = () => (
  <>
    <div className="hero hero--small" style={{ backgroundImage: `url(${TicketsBackground})` }}>
      <div className="hero__content hero__content--header">
        <div className="container">
          <div className="display-4">Bilety</div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="cart">
        {pricings.map(item => (
          <React.Fragment key={item.title}>
            <Ticket title={`Bilet ${item.title.toLowerCase()} - normalny`} price={item.price.regular} />
            <Ticket title={`Bilet ${item.title.toLowerCase()} - ulgowy`} price={item.price.discount} />
            <Ticket title={`Bilet ${item.title.toLowerCase()} - rodzinny`} price={item.price.family} />
            <div className="cart__separator"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </>
);

export default Tickets;
