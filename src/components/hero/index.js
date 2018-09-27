import React from 'react';
import './hero.scss';
import hero from 'static/images/hero.png';

const Hero = () => (
  <div className="section-hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-content-left">
          <h2 className="hero__title">WP Summit 2018 - Não perca a cabeça com WordPress Headless</h2>
          <a className="btn-hero" href="#">saiba mais</a>
        </div>

        <div className="hero-content-right">
          <img className="hero-thumb" src={hero} alt="Raposão" />
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
