import React from 'react';

const Opening = ({ day, hours: { start, end } }) => (
  <div className="footer-openings__item">
    <div className="footer-openings__day">{day}</div>
    <div className="footer-openings__hours">
      <span className="footer-openings__hour">{start}</span>
      <span className="footer-openings__separator">-</span>
      <span className="footer-openings__hour">{end}</span>
    </div>
  </div>
);

export default Opening;
