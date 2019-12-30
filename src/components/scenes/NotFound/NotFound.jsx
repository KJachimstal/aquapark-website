import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found__content">
      <h1>Nie odnaleziono strony</h1>
      <p>Strona, której szukasz nie istnieje lub została przeniesiona.</p>
      <Link to="/" className="btn btn-outline-light">Powrót do strony głównej</Link>
    </div>
  </div>
);

export default NotFound;
