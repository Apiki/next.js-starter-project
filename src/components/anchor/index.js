import React from 'react';
import t from 'prop-types';
import './anchor.scss';
import iconArrow from 'static/images/arrow.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Anchor = ({ link }) => (

  <AnchorLink className="anchor-down" href={link} offset="100">Sobre o Evento
    <img className="icon-arrow" src={iconArrow} alt="Icon line" />
  </AnchorLink>
);

Anchor.propTypes = {
  link: t.string,
};

export { Anchor };
