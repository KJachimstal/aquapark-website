import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Ticket = ({ title, price, onAdd }) => (
  <div className="cart__item row">
    <div className="cart__title col-6">{title}</div>
    <div className="cart__price col-4">
      <span className="cart__price-value">{price}</span>
      <span className="cart__price-currency">PLN</span>
    </div>
    <div className="col-2 text-right">
      <Button color="primary" onClick={() => onAdd(price)}>
        <FontAwesomeIcon icon={faCartPlus} />
      </Button>
    </div>
  </div>
);

export default Ticket;
