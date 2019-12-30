import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Ticket = ({ title, price }) => (
  <div className="cart__item row">
    <div className="cart__title col-12 col-md-6 text-center text-md-left py-2 py-md-0">{title}</div>
    <div className="cart__price col-8 col-md-4">
      <span className="cart__price-value">{price}</span>
      <span className="cart__price-currency">PLN</span>
    </div>
    <div className="col-4 col-md-2 text-right">
      <Button color="primary">
        <FontAwesomeIcon icon={faCartPlus} />
      </Button>
    </div>
  </div>
);

export default Ticket;
