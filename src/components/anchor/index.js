import React from 'react';
import t from 'prop-types';
import './anchor.scss';
import iconArrow from 'static/images/arrow.png';

const Anchor = ({ link }) => (

  <a className="anchor-down" href={link}>
    <img className="icon-arrow" src={iconArrow} alt="Icon line" />
  </a>
);

Anchor.propTypes = {
  link: t.string,
};

export { Anchor };
